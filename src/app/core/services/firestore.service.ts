import { Injectable, inject } from '@angular/core';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  onSnapshot,
  QueryConstraint,
  DocumentData,
  CollectionReference,
  DocumentReference,
  Query,
  Timestamp,
} from 'firebase/firestore';
import { db } from '../../firebase';
import { Project } from '../projects';

@Injectable({ providedIn: 'root' })
export class FirestoreService {
  private readonly projectsCollection = 'projects';

  /** Get a typed collection reference */
  private col<T = DocumentData>(path: string): CollectionReference<T> {
    return collection(db, path) as CollectionReference<T>;
  }

  /** Get a typed document reference */
  private docRef<T = DocumentData>(path: string, id: string): DocumentReference<T> {
    return doc(db, path, id) as DocumentReference<T>;
  }

  // ---------------------------------------------------------------------------
  // Projects – common accessors
  // ---------------------------------------------------------------------------

  /** Fetch all projects (one-time) */
  async getProjects(): Promise<Project[]> {
    const snap = await getDocs(this.col<Project>(this.projectsCollection));
    return snap.docs.map(d => ({ id: d.id, ...d.data() } as Project & { id: string }));
  }

  /** Fetch a single project by document ID */
  async getProjectById(id: string): Promise<(Project & { id: string }) | null> {
    const snap = await getDoc(this.docRef<Project>(this.projectsCollection, id));
    return snap.exists() ? { id: snap.id, ...snap.data() } : null;
  }

  /** Fetch a single project by slug (common for portfolio routing) */
  async getProjectBySlug(slug: string): Promise<(Project & { id: string }) | null> {
    const q = query(
      this.col<Project>(this.projectsCollection),
      where('slug', '==', slug),
      limit(1)
    );
    const snap = await getDocs(q);
    if (snap.empty) return null;
    const d = snap.docs[0];
    return { id: d.id, ...d.data() };
  }

  /** Fetch only featured projects */
  async getFeaturedProjects(): Promise<Project[]> {
    const q = query(
      this.col<Project>(this.projectsCollection),
      where('featured', '==', true)
    );
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() } as Project & { id: string }));
  }

  /** Fetch projects filtered by a tech tag */
  async getProjectsByTech(tech: string): Promise<Project[]> {
    const q = query(
      this.col<Project>(this.projectsCollection),
      where('tech', 'array-contains', tech)
    );
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() } as Project & { id: string }));
  }

  // ---------------------------------------------------------------------------
  // Generic helpers (reusable for other collections)
  // ---------------------------------------------------------------------------

  /** One-time fetch of an entire collection */
  async getCollection<T = DocumentData>(path: string): Promise<(T & { id: string })[]> {
    const snap = await getDocs(this.col<T>(path));
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  }

  /** One-time fetch of a single document */
  async getDocument<T = DocumentData>(path: string, id: string): Promise<(T & { id: string }) | null> {
    const snap = await getDoc(this.docRef<T>(path, id));
    return snap.exists() ? { id: snap.id, ...snap.data() } : null;
  }

  /** Query a collection with arbitrary constraints */
  async queryCollection<T = DocumentData>(
    path: string,
    ...constraints: QueryConstraint[]
  ): Promise<(T & { id: string })[]> {
    const q = query(this.col<T>(path), ...constraints);
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  }

  // ---------------------------------------------------------------------------
  // Write operations
  // ---------------------------------------------------------------------------

  /** Add a new document (auto-generated ID) */
  async addDocument<T = DocumentData>(path: string, data: T): Promise<string> {
    const ref = await addDoc(this.col<T>(path), data);
    return ref.id;
  }

  /** Create or overwrite a document with a known ID */
  async setDocument<T = DocumentData>(path: string, id: string, data: T): Promise<void> {
    await setDoc(this.docRef<T>(path, id), data);
  }

  /** Partial update of an existing document */
  async updateDocument(path: string, id: string, data: Partial<DocumentData>): Promise<void> {
    await updateDoc(this.docRef(path, id), data);
  }

  /** Delete a document */
  async deleteDocument(path: string, id: string): Promise<void> {
    await deleteDoc(this.docRef(path, id));
  }

  // ---------------------------------------------------------------------------
  // Real-time listeners
  // ---------------------------------------------------------------------------

  /**
   * Listen to an entire collection.
   * Returns an unsubscribe function.
   */
  listenToCollection<T = DocumentData>(
    path: string,
    callback: (items: (T & { id: string })[]) => void,
    ...constraints: QueryConstraint[]
  ): () => void {
    const q = constraints.length
      ? query(this.col<T>(path), ...constraints)
      : this.col<T>(path);

    return onSnapshot(q, snap => {
      const items = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      callback(items);
    });
  }

  /**
   * Listen to a single document.
   * Returns an unsubscribe function.
   */
  listenToDocument<T = DocumentData>(
    path: string,
    id: string,
    callback: (item: (T & { id: string }) | null) => void
  ): () => void {
    return onSnapshot(this.docRef<T>(path, id), snap => {
      callback(snap.exists() ? { id: snap.id, ...snap.data() } : null);
    });
  }

  /** Convenience: real-time listener for all projects */
  listenToProjects(callback: (projects: (Project & { id: string })[]) => void): () => void {
    return this.listenToCollection<Project>(this.projectsCollection, callback);
  }

  /** Convenience: real-time listener for featured projects */
  listenToFeaturedProjects(callback: (projects: (Project & { id: string })[]) => void): () => void {
    return this.listenToCollection<Project>(
      this.projectsCollection,
      callback,
      where('featured', '==', true)
    );
  }
}