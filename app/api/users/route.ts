// app/api/route.ts
import { NextResponse } from 'next/server';
import { db } from '../../../firebaseConfig'; // Importando a instância do Firestore
import { DocumentData, collection, getDocs } from 'firebase/firestore'; // Importando funções necessárias

export async function GET(request: Request, context: any) {
  try {
    // Obtendo todos os usuários da coleção
    const users = await getAllUsers(request, context);
    return NextResponse.json(users);
  } catch (error) {
    console.error('Erro ao obter usuários:', error);
    return NextResponse.error();
  }
}

async function getAllUsers(request: Request, context: any) {
  // Referência para a coleção 'users' no Firestore
  const usersCollection = collection(db, 'users');
  
  // Obtendo todos os documentos da coleção 'users'
  const querySnapshot = await getDocs(usersCollection);
  
  // Array para armazenar os dados dos usuários
  const users: DocumentData[] = [];
  
  // Iterando sobre os documentos e adicionando-os ao array
  querySnapshot.forEach((doc) => {
    users.push(doc.data());
  });
  
  return users;
}
