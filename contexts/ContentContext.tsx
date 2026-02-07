
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SiteContent, VisitorLog } from '../types';
import { COURSES, EMPLOYMENT_STATUS, PROCESS_STEPS } from '../constants';

const defaultContent: SiteContent = {
  hero: {
    badge: "국비지원 100% 무료 교육과정",
    title: "미래를 여는 인공지능 기술",
    highlight: "AI기반 인공지능 챗봇 개발",
    description: "Python, Django, MariaDB를 활용하여 현업에서 즉시 사용 가능한 대화형 AI 시스템을 구축합니다. 한국직업능력교육원 안산에서 전문가로 거듭나세요.",
    stats: [
      { label: '모집여부', value: '모집 중' },
      { label: '교육시간', value: '월~금 09:00~17:40' },
      { label: '교육기간', value: '6개월 과정(122일)' },
      { label: '수업형태', value: '오프라인 수업' },
      { label: '기숙사', value: '사용 가능' },
      { label: '선발방법', value: '문의 > 인터뷰 > 합격' },
    ]
  },
  intro: {
    badge: "Education Mission",
    title1: "전공·경력·나이에 상관없이",
    highlight: "‘할 수 있는 사람’",
    title2: "을 만들어냅니다",
    description: "20대부터 50대까지, 성별과 전공을 넘어 다양한 수료생들이 지금 이 순간에도 IT 현장에서 AI 개발자로 활약하고 있습니다.",
    images: [
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  vision: {
    items: [
      { num: '01', title: '고연봉 전문직', desc: 'AI 챗봇 및 머신러닝 기술력을 갖춘 개발자는 업계 최고의 대우' },
      { num: '02', title: '전 산업 수요 폭발', desc: '유통, 금융, 제조 등 모든 분야에서 AI 도입 가속화로 구인난 심화' },
      { num: '03', title: '평생 경력 자산', desc: '한번 익힌 로직과 데이터 사이언스 기술은 대체 불가능한 핵심 역량' },
      { num: '04', title: '스타트업/창업 기회', desc: '자신만의 독창적인 AI 서비스를 개발하여 1인 창업 및 도약 가능' }
    ]
  },
  courses: COURSES,
  examSchedule: {
    technician: [
      { round: "정보처리기능사 1회", writtenApp: "01.06 ~ 01.09", writtenExam: "01.20 ~ 02.02", writtenRes: "02.05", practicalApp: "03.09 ~ 03.12", practicalExam: "03.14 ~ 04.01", practicalRes: "04.10" },
      { round: "정보처리기능사 2회", writtenApp: "03.09 ~ 03.12", writtenExam: "03.20 ~ 04.09", writtenRes: "04.30", practicalApp: "05.11 ~ 05.14", practicalExam: "05.30 ~ 06.14", practicalRes: "06.26" },
      { round: "정보처리기능사 3회", writtenApp: "06.08 ~ 06.11", writtenExam: "06.27 ~ 07.02", writtenRes: "07.10", practicalApp: "07.27 ~ 07.30", practicalExam: "08.24 ~ 09.16", practicalRes: "10.02" },
      { round: "정보처리기능사 4회", writtenApp: "08.27 ~ 08.30", writtenExam: "09.21 ~ 10.15", writtenRes: "10.07", practicalApp: "10.12 ~ 10.15", practicalExam: "11.14 ~ 12.02", practicalRes: "12.11" },
    ],
    engineer: [
      { round: "정보처리기사 1회", writtenApp: "01.12 ~ 01.15", writtenExam: "01.30 ~ 03.03", writtenRes: "03.11", practicalApp: "03.23 ~ 03.26", practicalExam: "04.18 ~ 05.06", practicalRes: "06.12" },
      { round: "정보처리기사 2회", writtenApp: "04.20 ~ 04.23", writtenExam: "05.09 ~ 05.29", writtenRes: "06.10", practicalApp: "06.22 ~ 06.25", practicalExam: "07.18 ~ 08.05", practicalRes: "09.11" },
      { round: "정보처리기사 3회", writtenApp: "07.20 ~ 07.23", writtenExam: "08.07 ~ 09.01", writtenRes: "09.09", practicalApp: "09.21 ~ 09.28", practicalExam: "10.24 ~ 11.13", practicalRes: "12.18" },
    ]
  },
  strategy: {
    items: [
      { title: "실전 프로젝트 중심 교육", desc: "이론에 그치지 않고 실제 대화형 챗봇을 기획하고 구현하여 포트폴리오를 완성합니다." },
      { title: "비전공자 맞춤 코칭", desc: "복잡한 알고리즘도 쉽게! 파이썬 기초부터 차근차근 단계별로 실력을 향상시킵니다." },
      { title: "최신 AI 트렌드 반영", desc: "OpenAI, Django, MariaDB 등 현업에서 가장 많이 쓰이는 기술 스택을 마스터합니다." },
      { title: "1:1 취업 밀착 지원", desc: "자소서 첨삭부터 기술 면접 대비까지, IT 전문 취업 컨설턴트가 끝까지 동행합니다." }
    ],
    reviews: [
      { name: "김OO님", text: "컴퓨터의 'ㅋ'자도 몰랐는데, 6개월 만에 제 챗봇을 웹에 배포했을 때의 감동을 잊을 수 없습니다.", tag: "비전공자" },
      { name: "이OO님", text: "강사진이 현업 출신이라 그런지 실무 꿀팁을 정말 많이 배웠습니다. 취업 성공의 일등공신입니다.", tag: "최종합격" },
      { name: "박OO님", text: "커리큘럼이 빡빡하지만 그만큼 얻어가는 게 많습니다. 포트폴리오 퀄리티가 남달라졌어요.", tag: "실무역량" },
      { name: "최OO님", text: "국비지원이라 부담 없이 시작했는데, 80만원 수당 덕분에 공부에만 집중할 수 있었습니다.", tag: "경제적지원" },
      { name: "한OO님", text: "IT 개발자로 전향하고 싶으신 분들께 강추합니다. 안산 최고의 AI 교육원입니다.", tag: "이직성공" },
      { name: "정OO님", text: "혼자 공부할 때는 막막했는데 동료들과 프로젝트하며 성장하는 즐거움을 알게 되었습니다.", tag: "팀워크" }
    ]
  },
  employment: {
    status: EMPLOYMENT_STATUS,
    process: PROCESS_STEPS
  }
};

interface ContentContextType {
  content: SiteContent;
  visitorLogs: VisitorLog[];
  updateContent: (newContent: SiteContent) => void;
  addVisitorLog: (log: Omit<VisitorLog, 'id'>) => void;
  resetContent: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

// 버전을 v5로 올려서 로컬 스토리지를 강제 갱신함
const STORAGE_KEY = 'site_content_v5';
const LOG_KEY = 'visitor_logs_v5';

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [visitorLogs, setVisitorLogs] = useState<VisitorLog[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedContent = localStorage.getItem(STORAGE_KEY);
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent);
        setContent({ ...defaultContent, ...parsed });
      } catch (e) {
        console.error("Failed to load content", e);
      }
    }

    const savedLogs = localStorage.getItem(LOG_KEY);
    if (savedLogs) {
      try {
        setVisitorLogs(JSON.parse(savedLogs));
      } catch (e) {
        console.error("Failed to load logs", e);
      }
    }

    setIsLoaded(true);
  }, []);

  const updateContent = (newContent: SiteContent) => {
    setContent(newContent);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newContent));
  };

  const addVisitorLog = (logData: Omit<VisitorLog, 'id'>) => {
    const newLog: VisitorLog = {
      ...logData,
      id: Math.random().toString(36).substr(2, 9)
    };
    
    setVisitorLogs(prev => {
      const updated = [newLog, ...prev].slice(0, 500);
      localStorage.setItem(LOG_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const resetContent = () => {
    if (window.confirm("모든 변경사항을 초기화하시겠습니까?")) {
      setContent(defaultContent);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  if (!isLoaded) return null;

  return (
    <ContentContext.Provider value={{ content, visitorLogs, updateContent, addVisitorLog, resetContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) throw new Error("useContent must be used within a ContentProvider");
  return context;
};
