import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useGame } from "@/hooks/use-game";
import { GameBoard } from "./GameBoard";
import { HowToPlayDialog } from "./HowToPlayDialog";
import { topics } from "@/data/topics";
import { Card } from "@/components/ui/card";
import { KeyboardAndHandlers } from "@/pages/Game";
import { Input } from "@/components/ui/input";
import {
  BeakerIcon,
  RocketLaunchIcon,
  SparklesIcon,
  CalculatorIcon,
  ChartBarIcon,
  AcademicCapIcon,
  UsersIcon,
  CurrencyDollarIcon,
  LightBulbIcon,
  BookOpenIcon,
  ClockIcon,
  CodeBracketIcon,
  QueueListIcon,
  ArrowPathIcon,
  BanknotesIcon,
  MegaphoneIcon,
  UserGroupIcon,
  UserIcon,
  HeartIcon,
  FireIcon,
} from "@heroicons/react/24/outline";

export const SplashPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const {
    gameState,
    letterStates,
    selectTopic,
    playAgain,
    submitGuess,
    handleKeyPress,
    handleDelete,
  } = useGame();

  // Handle keyboard input when playing
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameState.gameStatus !== 'playing') return;

      // Handle letter keys
      if (/^[a-zA-Z]$/.test(e.key)) {
        handleKeyPress(e.key.toUpperCase());
      }
      // Handle backspace/delete
      else if (e.key === 'Backspace' || e.key === 'Delete') {
        handleDelete();
      }
      // Handle enter
      else if (e.key === 'Enter') {
        submitGuess();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState.gameStatus, handleKeyPress, handleDelete, submitGuess]);

  const filteredTopics = topics.filter(topic => 
    topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const iconMap: { [key: string]: React.ElementType } = {
    BeakerIcon,
    RocketLaunchIcon,
    SparklesIcon,
    CalculatorIcon,
    ChartBarIcon,
    AcademicCapIcon,
    UsersIcon,
    CurrencyDollarIcon,
    LightBulbIcon,
    BookOpenIcon,
    ClockIcon,
    CodeBracketIcon,
    QueueListIcon,
    ArrowPathIcon,
    BanknotesIcon,
    MegaphoneIcon,
    UserGroupIcon,
    UserIcon,
    HeartIcon,
    FireIcon,
  };

  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className="h-8 w-8 mb-4" /> : null;
  };

  const renderTopicSelection = () => (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto p-4">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold text-center">Studle</h1>
        <p className="text-xl text-center text-muted-foreground">
          Test your vocabulary across different fields of study
        </p>
        <div className="w-full max-w-md">
          <Input
            type="text"
            placeholder="Search topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTopics.map((topic) => (
          <Card 
            key={topic.id}
            className="p-4 cursor-pointer hover:bg-accent transition-colors flex flex-col items-center text-center"
            onClick={() => selectTopic(topic.id)}
          >
            {getIcon(topic.icon)}
            <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
            <p className="text-muted-foreground">{topic.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderGame = () => (
    <div className="flex flex-col items-center justify-center gap-8">
      <h2 className="text-2xl font-bold">
        {topics.find(t => t.id === gameState.selectedTopic)?.title}
      </h2>
      
      <HowToPlayDialog/>
      
      <GameBoard
        guesses={gameState.guesses}
        results={gameState.results}
        currentGuess={gameState.currentGuess}
        targetLength={gameState.targetWord?.word.length || 0}
        targetWord={gameState.targetWord?.word || ""}
      />

      <KeyboardAndHandlers
      {...{ gameState,
        letterStates,
        submitGuess,
        handleKeyPress,
        handleDelete,}}/>

      {(gameState.gameStatus === 'won' || gameState.gameStatus === 'lost') && (
        <div className="flex flex-col items-center gap-4">
          <div className="text-center">
            {gameState.gameStatus === 'won' ? (
              <h3 className="text-xl font-bold text-green-600">Congratulations!</h3>
            ) : (
              <div>
                <h3 className="text-xl font-bold text-red-600">Game Over</h3>
                <p className="mt-2">The word was: {gameState.targetWord?.word}</p>
              </div>
            )}
            <p className="mt-2">{gameState.targetWord?.definition}</p>
            {gameState.targetWord?.wikipediaUrl && (
              <a 
                href={gameState.targetWord.wikipediaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mt-2 block"
              >
                Learn more
              </a>
            )}
          </div>
          <Button onClick={playAgain}>Play Again</Button>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-7xl mx-auto">
        {gameState.gameStatus === 'selecting' ? renderTopicSelection() : renderGame()}
      </div>
    </div>
  );
};
