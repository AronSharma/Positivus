import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AIzaSyBTNLCV46vpvhaJv7GxCip122IR-3Xp5aE';
const genAI = new GoogleGenerativeAI(API_KEY);

export class GeminiAI {
  private model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  async generateContent(prompt: string): Promise<string> {
    try {
      const result = await this.model.generateContent(prompt);
      return result.response.text();
    } catch (error) {
      console.error('Gemini AI Error:', error);
      return 'Sorry, I couldn\'t generate content at the moment. Please try again.';
    }
  }

  async generateImage(prompt: string): Promise<string> {
    // For image generation, we'll create a descriptive prompt for display
    try {
      const enhancedPrompt = `Create a detailed description for an image based on: ${prompt}. Make it vivid and professional for a digital marketing context.`;
      const result = await this.model.generateContent(enhancedPrompt);
      return result.response.text();
    } catch (error) {
      console.error('Image generation error:', error);
      return 'Professional digital marketing visual';
    }
  }

  async analyzeUserInput(input: string): Promise<string> {
    try {
      const prompt = `As a digital marketing expert, provide helpful advice for: ${input}. Keep it concise, actionable, and professional.`;
      const result = await this.model.generateContent(prompt);
      return result.response.text();
    } catch (error) {
      console.error('Analysis error:', error);
      return 'Thank you for your question. Our team will get back to you soon!';
    }
  }

  async generateMarketingCopy(type: string, brief: string): Promise<string> {
    try {
      const prompt = `Generate compelling ${type} copy for a digital marketing campaign. Brief: ${brief}. Make it engaging, persuasive, and modern.`;
      const result = await this.model.generateContent(prompt);
      return result.response.text();
    } catch (error) {
      console.error('Marketing copy error:', error);
      return 'Innovative digital marketing solutions that drive results.';
    }
  }
}

export const geminiAI = new GeminiAI();