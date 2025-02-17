import { TopicId, WordEntry } from "@/types/topics";
import { medicalWords } from "@/data/words/medical";
import { chemicalWords } from "@/data/words/chemical";
import { philosophicalWords } from "@/data/words/philosophical";
import { geologicalWords } from "@/data/words/geological";
import { programmingWords } from "@/data/words/programming";
import { archaeologicalWords } from "@/data/words/archaeological";
import { psychologicalWords } from "@/data/words/psychological";
import statisticalWords from "@/data/words/statistical";
import { biologyWords } from "@/data/words/biology";
import { physicsWords } from "@/data/words/physics";
import { calculusWords } from "@/data/words/calculus";
import { economicsWords } from "@/data/words/economics";
import { literatureWords } from "@/data/words/literature";
import { algorithmsWords } from "@/data/words/algorithms";

const wordLists: Record<TopicId, WordEntry[]> = {
  medical: medicalWords,
  chemical: chemicalWords,
  philosophical: philosophicalWords,
  geological: geologicalWords,
  programming: programmingWords,
  archaeological: archaeologicalWords,
  psychological: psychologicalWords,
  statistical: statisticalWords,
  biology: biologyWords,
  physics: physicsWords,
  calculus: calculusWords,
  economics: economicsWords,
  literature: literatureWords,
  algorithms: algorithmsWords,
};

export const getRandomWord = (topicId: TopicId): WordEntry => {
  const list = wordLists[topicId];
  if (!list || list.length === 0) {
    throw new Error(`No words available for topic: ${topicId}`);
  }
  const index = Math.floor(Math.random() * list.length);
  return list[index];
};
