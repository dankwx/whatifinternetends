// app/api/route.ts
import { NextResponse } from 'next/server';
import { db } from '../../../firebaseConfig'
import { collection, addDoc } from 'firebase/firestore';

export async function GET() {
  try {
    // Adicionando um novo documento com os dados do usuário
    await addNewUser();
    return NextResponse.json({ message: 'Usuário adicionado com sucesso.' });
  } catch (error) {
    console.error('Erro ao adicionar usuário:', error);
    return NextResponse.error();
  }
}

async function addNewUser() {
  // Referência para a coleção 'users' no Firestore
  const usersCollection = collection(db, 'users');
  
  // Dados do usuário a serem adicionados
  const userData = {
    id: 1,
    user: 'user2',
    age: 19
  };

  // Adicionando o documento com os dados do usuário à coleção 'users'
  await addDoc(usersCollection, userData);
}