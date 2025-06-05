import React, { useState } from 'react';
import Card, { CardContent, CardHeader, CardFooter } from '../ui/Card';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { X, Send, Bot } from 'lucide-react';
import { askAboutCity } from '../../services/aiService';

interface CityAIQuestionProps {
  cityName: string;
  onClose: () => void;
}

const CityAIQuestion: React.FC<CityAIQuestionProps> = ({ cityName, onClose }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [askedQuestions, setAskedQuestions] = useState<string[]>([]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!question.trim()) return;
    
    setIsLoading(true);
    try {
      const response = await askAboutCity({ question, cityName });
      setAnswer(response);
      setAskedQuestions([...askedQuestions, question]);
      setQuestion('');
    } catch (error) {
      console.error('Error asking AI:', error);
      setAnswer('Sorry, there was an error processing your question. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleQuickQuestion = async (quickQuestion: string) => {
    setQuestion(quickQuestion);
    setIsLoading(true);
    try {
      const response = await askAboutCity({ question: quickQuestion, cityName });
      setAnswer(response);
      setAskedQuestions([...askedQuestions, quickQuestion]);
      setQuestion('');
    } catch (error) {
      console.error('Error asking AI:', error);
      setAnswer('Sorry, there was an error processing your question. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const quickQuestions = [
    `What's the cost of living in ${cityName}?`,
    `How is public transportation in ${cityName}?`,
    `What's the cultural scene like in ${cityName}?`,
    `How's the weather in ${cityName}?`
  ];
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[80vh] flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center">
            <Bot className="h-5 w-5 text-blue-500 mr-2" />
            <h2 className="text-xl font-semibold">Ask about {cityName}</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </CardHeader>
        
        <CardContent className="flex-grow overflow-y-auto">
          {answer ? (
            <div className="space-y-4">
              <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none">
                <p className="text-sm font-medium text-gray-700">{askedQuestions[askedQuestions.length - 1]}</p>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg rounded-tr-none border-l-4 border-blue-500">
                <p className="text-sm text-gray-700">{answer}</p>
                <div className="mt-2 text-xs text-gray-500">
                  <span className="font-medium">Note:</span> This information is AI-generated and should be verified.
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">You might also want to know:</h3>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions
                    .filter(q => !askedQuestions.includes(q))
                    .slice(0, 3)
                    .map((q, i) => (
                      <button
                        key={i}
                        onClick={() => handleQuickQuestion(q)}
                        className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full hover:bg-gray-200 transition-colors"
                      >
                        {q}
                      </button>
                    ))
                  }
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium text-blue-700 mb-2">About the AI Assistant</h3>
                <p className="text-sm text-gray-700">
                  Ask specific questions about {cityName} to get detailed information about cost of living, 
                  culture, transportation, or any other aspect of the city you're curious about.
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Popular questions:</h3>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleQuickQuestion(q)}
                      className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </CardContent>
        
        <CardFooter className="border-t border-gray-100">
          <form onSubmit={handleSubmit} className="w-full flex gap-2">
            <Input
              placeholder={`Ask anything about ${cityName}...`}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              fullWidth
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              disabled={!question.trim() || isLoading}
              isLoading={isLoading}
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CityAIQuestion;