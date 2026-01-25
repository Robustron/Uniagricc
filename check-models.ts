import { GoogleGenerativeAI } from '@google/generative-ai'
import { config } from 'dotenv'

config()

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

async function checkModels() {
  try {
    // Try to list available models
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GEMINI_API_KEY}`)
    const data = await response.json()
    console.log('Available models:', JSON.stringify(data, null, 2))
  } catch (error) {
    console.error('Error:', error)
  }
}

checkModels()
