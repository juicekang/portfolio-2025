// src/data/projects.js

export const projects = [
    {
      id: 1,
      title: 'AIDT 디지털 교육자료',
      description: 'AI디지털교육자료 2024년도, 2025년도 구축',
      thumbnail: '/images/projects/project1-thumb.jpg',
      mainImage: '/images/projects/project1-main.jpg',
      period: '2024.01 - 2025.10',
      role: '메인 퍼블리셔',
      teamSize: '퍼블리셔 10명',
      tags: ['반응형', '웹접근성/UDL', 'Vue3', 'Sass', '크로스브라우징'],
      overview:
        'Vue3 기반 AI 디지털 교육자료 플랫폼 퍼블리싱, 프론트엔드 개발을 진행하였습니다. SPA 구조 설계 및 학습창의 공통 컴포넌트를 설계하고, 학습 데이터를 시각화하여 사용자 경험을 개선하였습니다. 또한, 웹접근성/UDL(보편적 학습 설계) 준수를 위해 시맨틱 마크업 구조를 설계하였습니다.',
      features: [
        '반응형 웹 디자인 (데스크톱, 태블릿)',
        '웹접근성 준수, UDL(보편적 학습 설계) 준수',
        '다국어 지원 (한국어, 영어, 중국어, 베트남어, 일본어)',
        '교사, 학생 템플릿 분리 구축'
      ],
      techStack: ['Vue3', 'CSS3', 'Sass', 'JavaScript', 'Git', 'Figma', 'Charts.js', 'Swiper.js'],
      contributions: [
        {
          title: 'Vue.js 기반 SPA 구축',
          description:
            '전체 페이지를 컴포넌트 단위로 설계 및 관리, 공통 모듈화 작업으로 유지보수성 및 확장성 강화'
        },
        {
          title: 'Chart.js 활용 데이터 시각화',
          description:
            '사용자 통계 화면에 다양한 형태의 그래프(막대형, 원형, 선형 등) 커스터마이징'
        },
        {
          title: '발표자 자동 선정 학습 도구 개발',
          description:
            '사용자 입력을 기반으로 발표자를 무작위/조건 기반으로 선정하는 커스텀 기능을 단독 개발'
        },
        {
          title: 'UI 재사용성 강화',
          description:
            'props 및 scoped slot 기반 유연한 컴포넌트 구조 설계로 동일한 컴포넌트를 다양한 화면에서 재사용 가능하도록 구조화'
        },
        {
            title: '퍼블리싱 및 반응형 대응',
            description:
              '디자인 시스템을 기반으로 반응형 UI 설계 및 인터랙션 구현'
          },
          {
            title: '다국어 대응',
            description:
              '영어, 중국어, 일본어, 베트남어 사용자를 위한 다국어 서비스 대응'
          },
          {
            title: '크로스 브라우징 및 하위버전 OS 대응',
            description:
              'Edge, Safari, Chrome, Firefox 등 주요 브라우저 및 하위버전 OS(Windows 7, 8, 10) 대응'
          },
      ],
    //   achievements: [
    //     { value: '200+', label: '페이지 마크업' },
    //     { value: 'AA', label: '웹접근성 등급' },
    //     { value: '40%', label: '로딩속도 개선' },
    //     { value: '95+', label: 'Lighthouse 점수' }
    //   ],
      challenges: [
        
        {
          title: '웹접근성 및 UDL 준수 이슈',
          problem: '환경, 장애에 상관없이 보편적 학습 환경을 제공하기 위해 웹접근성 및 UDL 준수가 필수적으로 요구되었습니다.',
          solution:
            'Skip Navigation 구현, 포커스 순서 최적화, ARIA 속성 활용으로 키보드 접근성을 100% 확보했습니다.'
        },
        {
            title: '크로스 브라우징 이슈',
            problem: '하위 OS를 사용하는 태블릿 기기까지 크로스 브라우징 대응이 필수적으로 요구되었습니다.',
            solution:
              'browserstack 확장 프로그램을 이용하여 다양한 환경에서 테스트를 진행하여 동일한 환경을 제공할 수 있도록 수정하였습니다.'
          },
        {
          title: 'Primevue 프레임워크 문법 오류',
          problem: 'Primevue 프레임워크를 사용하며 발생하는 문법 오류가 다수 발생하였습니다.',
          solution:
            'w3c validator를 활용하여 문법 오류 이슈 사항을 정리하고, 공통적으로 해결 될 수 있는 컴포넌트 이슈 우선 처리 후에 개별 페이지 확인을 통하여 오류를 해결하였습니다.'
        },
        {
            title: '하위버전 iOS css 버그 대응',
            problem:
              '하위버전 iOS에서 css 속성이 제대로 동작하지 않아 레이아웃이 깨지는 문제가 발생했습니다.',
            solution:
              'flex 구조를 사용한 레이아웃에서 gap 속성을 사용하여 레이아웃이 틀어지는 현상이 발생하여, margin 속성을 사용하여 레이아웃이 틀어지는 현상을 해결하였습니다.'
          },
      ],
      links: {
        isService: true,
        live: 'https://support.aitextbook.co.kr/?type=5',
        github: null
      }
    },
    {
      id: 2,
      title: 'KITA 한국무역협회',
      description: '한국무역협회 홈페이지 리뉴얼 구축 프로젝트',
      thumbnail: '/images/projects/project2-thumb.jpg',
      mainImage: '/images/projects/project2-main.jpg',
      period: '2023.06 - 2023.11',
      role: '메인 퍼블리셔',
      teamSize: '퍼블리셔 2명',
      tags: ['반응형', '크로스브라우징'],
      overview:
        '한국무역협회(KITA)의 국내 사이트를 리뉴얼 하는 프로젝트에 참여하였습니다. 기존 웹사이트에서 디자인, 개발 모두 크게 개편되었으며 무역 협회 특성상 무역 자료 데이터를 다루는 페이지가 많아 개발 친화적인 코드에 초점을 맞추어 진행하였습니다.',
      features: [
        '무역협회 공지사항, 무역동향뉴스',
        '실시간 환율 동향',
        '국제무역통상연구원',
        '무역 전문가 1:1 실시간 상담',
      ],
      techStack: ['HTML5', 'SCSS', 'JavaScript','jQuery','Bootstrap','Git'],
      contributions: [
        {
          title: '서브 페이지 UI 퍼블리싱',
          description:
            '전체 서브 페이지 중 약 50%를 퍼블리싱하였으며, 기존 개발된 페이지 구조를 분석하고 직접 수정하여 변경된 디자인 요구사항을 반영했습니다.'
        },
        {
          title: '디자인 변경 및 유지보수 대응',
          description:
            '외부 파견 프로젝트 특성상 잦은 디자인 변경 사항에 적극 대응하였고, 기존 소스를 활용해 효율적으로 반영하였습니다.'
        },
        {
          title: '개발팀 협업 기반 코드 구조 개선',
          description:
            '무역 데이터 게시판, 상담 기능 등 개발 로직이 많이 필요한 페이지에서 개발자와 긴밀하게 협업하여 유지보수성과 확장성이 높은 코드 구조를 설계하였습니다.'
        },
        {
          title: '크로스 브라우징 및 레거시 환경 대응',
          description:
            'IE11까지 원활히 동작하도록 스타일 및 스크립트 호환성을 확인했으며, 안정적인 실행을 위해 JavaScript ES5 문법을 준수했습니다.'
        }
      ],
    //   achievements: [
    //     { value: '50+', label: '컴포넌트' },
    //     { value: '30%', label: '코드 재사용률' },
    //     { value: '2초', label: '평균 로딩속도' }
    //   ],
    //   challenges: [
    //     {
    //       title: '무한 스크롤 성능 최적화',
    //       problem: '상품 목록이 많아질수록 렌더링 성능이 저하되었습니다.',
    //       solution:
    //         'Intersection Observer API와 가상 스크롤링을 적용하여 성능을 개선했습니다.'
    //     }
    //   ],
      links: {
        isService: true,
        live: 'https://kita.net/',
        github: null
      }
    },
    {
        id: 3,
        title: 'KITA 한국무역협회 해외지부',
        description: '한국무역협회 해외지부 홈페이지 리뉴얼 구축 프로젝트',
        thumbnail: '/images/projects/project2-thumb.jpg',
        mainImage: '/images/projects/project2-main.jpg',
        period: '2023.06 - 2023.09',
        role: '메인 퍼블리셔',
        teamSize: '퍼블리셔 2명',
        tags: ['반응형', '크로스브라우징'],
        overview:
          '한국무역협회(KITA)의 해외지부 사이트를 퍼블리싱하였습니다. 반응형이며, 해외지부 웹사이트인만큼 빠른 로드속도가 무엇보다 중요했기 때문에 최적화에 초점을 맞추어 퍼블리싱하였습니다.',
          features: [
            '글로벌 무역 통계 및 시장 데이터 제공',
            '국제 무역 네트워크 및 해외 지사 정보 제공',
            '뉴스, 리포트, 정기간행물 중심의 정보 아카이브'
          ],
        techStack: ['HTML5', 'SCSS', 'JavaScript','jQuery','Bootstrap','Git'],
        contributions: [
            {
              title: '전반적인 JavaScript 기능 개발 및 유지',
              description:
                '웹사이트 내 주요 기능과 인터랙션 요소를 JavaScript로 구현하며 안정적인 사용자 경험을 제공했습니다.'
            },
            {
              title: '로드 속도 개선 및 성능 최적화',
              description:
                '해외 이용자를 고려하여 초기 페이지 로딩 속도를 최소화하는 데 집중하였으며, 불필요한 리소스 처리 최소화 및 메모리 최적화를 수행했습니다.'
            },
            {
              title: '무역 통계 데이터 서비스 구현',
              description:
                '해외 사용자 전용 무역통계 서비스 UI 구조를 설계하고, 데이터 기반 페이지에서도 효율적인 이용이 가능하도록 개발 친화적이고 구조적인 마크업을 적용했습니다.'
            },
            {
              title: '데이터 기반 페이지 접근성 및 유지보수성 강화',
              description:
                '데이터량이 많은 페이지에서도 이해하기 쉬운 DOM 구조와 명확한 클래스 네이밍을 적용하여 추후 확장 및 유지보수가 수월한 코드베이스를 구축했습니다.'
            }
          ],
        links: {
        isService: true,
          live: 'https://kita.org/',
          github: null
        }
      },
    {
      id: 4,
      title: '보험연구원',
      description: '보험연구원 공식 홈페이지 구축',
      thumbnail: '/images/projects/project3-thumb.jpg',
      mainImage: '/images/projects/project3-main.jpg',
      period: '2023.02',
      role: '프론트엔드 퍼블리셔',
      teamSize: '디자이너 1명, 퍼블리셔 2명',
      tags: ['반응형', '크로스브라우징', 'Bootstrap'],
      overview:
        '보험연구원의 공식 홈페이지입니다. 기존 웹사이트를 리뉴얼하는 형식으로 진행되었고, 기존 개발소스를 최대한 활용하는 것을 중점으로 두어 퍼블리싱을 진행하였습니다. 전체 반응형으로 진행되었고, 특이한 형식의 슬라이드 형식을 구현하여 깔끔하고도 눈에 띄게 정보를 보여줄 수 있도록 하였습니다. ',
        features: [
            '자료 아카이브 및 보고서 목록 제공',
            '메뉴 기반 컨텐츠 구조 (연구 / 정기간행물 / 커뮤니케이션 / 연구원소개)',
            '검색 기능 및 인기검색어 제공',
            '다국어 지원 (한국어 / 영어)'
          ],
      techStack: ['HTML5', 'SCSS', 'jQuery', 'Bootstrap', 'swiper.js'],
      contributions: [
        {
          title: '기존 웹사이트 리뉴얼 및 구조 분석',
          description:
            '기존 개발된 소스를 기반으로 구조를 분석하고, 재사용 가능한 자원을 활용하여 효율적인 리뉴얼 작업을 수행했습니다.'
        },
        {
          title: '메인 및 서브 페이지 전면 퍼블리싱',
          description:
            '메인 페이지 일부와 모든 서브 페이지(100%)를 단독으로 퍼블리싱하였으며, 반응형 UI로 구축하여 다양한 디바이스에서도 일관된 사용자 경험을 제공했습니다.'
        },
        {
          title: '인터랙션 기반 슬라이드 구성 구현',
          description:
            '특수 형식의 슬라이드 UI를 직접 구현하여 정보 전달력을 높이고 시각적으로 돋보이는 콘텐츠 구조를 제작했습니다.'
        },
        {
          title: '지속적 유지보수 및 클라이언트 대응',
          description:
            '프로젝트 종료 후 클라이언트 요청사항을 기반으로 모든 유지보수 작업을 전담하며 품질 및 구조적 일관성을 유지했습니다.'
        }
      ],
      challenges: [],
      links: {
        isService: true,
        live: 'https://www.kiri.or.kr/index.do',
        github: null
      }
    },
    {
      id: 5,
      title: '유니클로 공식 온라인스토어 콘텐츠 제작',
      description: '유니클로 공식 온라인스토어의 정기 콘텐츠를 퍼블리싱하였습니다',
      thumbnail: '/images/projects/project3-thumb.jpg',
      mainImage: '/images/projects/project3-main.jpg',
      period: '2023.04',
      role: '퍼블리셔',
      teamSize: '디자이너 2명, 퍼블리셔 3명',
      tags: ['HTML5', 'jQuery', 'CSS3', 'swiper.js'],
      overview:
        '유니클로 공식 온라인 스토어의 정기 콘텐츠 퍼블리싱을 담당했습니다.사용자의 접근성과 사용성을 고려하여 PC와 모바일 환경 모두에 대응하는 적응형 레이아웃으로 제작하였으며, 제품 이미지와 화보 컨텐츠가 조화롭게 구성될 수 있도록 UI 디테일과 인터랙션 설계에 집중했습니다. 특히 모바일 환경에서는 빠른 정보 접근이 가능하도록 콘텐츠 흐름과 행동 유도 요소(CTA)를 최적화하여 사용자 경험을 개선했습니다.',
      techStack: ['HTML5', 'jQuery', 'CSS3', 'swiper.js'],
      contributions: [
        {
            title: '사용성 중심 인터랙션 및 동선 설계',
            description:
              '모바일 사용자 경험을 고려해 자연스러운 스크롤 흐름과 버튼 액션을 구성했으며, 리플렛 콘텐츠가 제품 상세 정보와 유기적으로 연결되도록 인터랙션을 설계했습니다.'
          },
          {
            title: '콘텐츠 가독성과 접근성 개선',
            description:
              '텍스트, 버튼, 이미지 간 여백, 시각적 계층 구조 및 인터페이스 요소를 최적화하여 쉬운 정보 접근이 가능하도록 개발했습니다.'
          }
      ],
      challenges: [],
      links: {
        isService: false,
        live: 'https://sketchbook.kr/book/202302',
        github: null
      }
    },
    {
      id: 6,
      title: '미래엔 초등 디지털 교육 컨텐츠',
      description: '미래엔의 초등 디지털 교육 컨텐츠 게임형 인터랙션과 학습 컨텐츠들을 개발하였습니다.',
      thumbnail: '/images/projects/project3-thumb.jpg',
      mainImage: '/images/projects/project3-main.jpg',
      period: '2020.08 - 2023.02',
      role: '퍼블리셔',
      teamSize: '퍼블리셔 7명',
      tags: ['HTML5', 'jQuery', 'CSS3', 'swiper.js'],
      overview:
        '미래엔 초등교과서의 전자저작물, 엠티처, 디지털교과서, 하루한장수학 등 디지털 컨텐츠 개발을 하였습니다. 다년간 다양한 게임형 인터랙션, 과학 가상실험실 등 학습용 인터랙션을 개발하였습니다. 유사한 형식의 게임형 인터랙션인 경우, 템플릿화하여 재사용할 수 있게끔 범용성이 높은 코드로 작성하였습니다. 프로젝트 특성상, 일정에 맞게 개발하는 것이 가장 중요했기 때문에 스케줄에 차질이 생기지 않도록 팀원들과 일정 회의를 하여 업무 분배를 철저히 하였습니다. ',
      techStack: ['HTML5', 'jQuery', 'CSS3', 'swiper.js'],
      contributions: [
        {
          title: '교육용 디지털 콘텐츠 개발',
          description:
            '미래엔 초등 교과서 전자저작물, 엠티처, 디지털교과서, 하루한장 수학 등 다양한 교육 콘텐츠 제작을 담당했습니다.'
        },
        {
          title: '게임형 인터랙션 및 학습 UI 개발',
          description:
            '다양한 학습 기능을 제공하는 게임형 인터랙션, 가상 실험실 및 학습 인터랙션을 개발하여 사용자 참여도를 높였습니다.'
        },
        {
          title: '범용성과 유지보수를 고려한 템플릿 설계',
          description:
            '유사한 유형의 인터랙션 콘텐츠는 공통 구조를 정의하고 템플릿화하여 반복 작업을 최소화하고 개발 효율을 향상시켰습니다.'
        },
        {
          title: '콘텐츠 제작 프로세스 자동화 및 페이지 양산',
          description:
            '전체 페이지 양산 작업을 수행하며 구조화된 개발 방식과 재사용 가능한 코드베이스를 통해 제작 속도를 개선했습니다.'
        },
        {
          title: '프로젝트 일정 조율 및 협업 강화',
          description:
            '다수의 콘텐츠가 동시에 진행되는 환경에서 팀원들과 일정 회의를 진행하며 업무를 분배하고, 개발 일정에 차질이 없도록 관리했습니다.'
        }
      ],
      challenges: [],
      links: {
        isService: false,
        live: 'https://sketchbook.kr/book/202302',
        github: null
      }
    },
    {
      id: 7,
      title: '마이스 플랫폼 오투밋 O2MEET',
      description: '웨비나, 종합 박람회를 간편하고 쉽게 제작할 수 있게 도와주는 마이스 플랫폼 O2MEET의 웹사이트를 제작하였습니다.',
      thumbnail: '/images/projects/project3-thumb.jpg',
      mainImage: '/images/projects/project3-main.jpg',
      period: '2022.05',
      role: '퍼블리셔',
      teamSize: '디자이너 1명, 퍼블리싱 2명, 외부 개발',
      tags: ['HTML5', 'jQuery', 'SCSS', 'swiper.js', 'Bootstrap'],
      overview:
        '온라인 행사를 손쉽게 주최할 수 있는 플랫폼 사이트입니다. 전체 반응형 웹사이트로 제작되었으며, 메인과 about 페이지를 제외한 서브페이지 퍼블리싱을 담당했습니다. 원활한 협업을 할 수 있도록 SCSS를 사용하여 진행되었으며, 그 결과 향상된 효율과 더 빨라진 업무 속도를 경험할 수 있었습니다. 또한 SCSS를 사용한 첫 프로젝트였기 때문에, 프로젝트가 종료된 뒤 팀원과 함께 전처리기 사용에 대한 피드백을 나누며 더 효율적인 사용 방법을 고찰할 수 있었습니다.',
      techStack: ['HTML5', 'jQuery', 'SCSS', 'swiper.js', 'Bootstrap'],
      contributions: [
        {
          title: '반응형 서브페이지 퍼블리싱',
          description:
            '온라인 행사 플랫폼의 메인 및 About 페이지를 제외한 모든 서브페이지 퍼블리싱을 100% 담당했습니다.'
        },
        {
          title: 'SCSS 기반 협업 시스템 구축',
          description:
            'SCSS를 활용해 공통 변수, 스타일 가이드, 컴포넌트 구조를 설정하여 협업 효율성과 유지보수 속도를 크게 향상시켰습니다.'
        },
        {
          title: '재사용 가능한 컴포넌트 설계',
          description:
            '디자인 시안을 기반으로 반복되는 UI 요소를 우선 분석하여 재사용 가능한 컴포넌트 형태로 제작했습니다.'
        },
        {
          title: '유지보수 및 운영 지원',
          description:
            '프로젝트 완료 후 모든 유지보수를 100% 담당하며 클라이언트 요청사항 및 기능 개선 작업을 수행했습니다.'
        }
      ],      
      challenges: [],
      links: {
        isService: false,
        live: 'https://sketchbook.kr/book/202210',
        github: null
      }
    },
    {
      id: 8,
      title: '셀트리온 뷰티몰 모바일 쇼핑몰',
      description: '셀트리온 뷰티몰의 모바일 홈페이지를 퍼블리싱 하였습니다.',
      thumbnail: '/images/projects/project3-thumb.jpg',
      mainImage: '/images/projects/project3-main.jpg',
      period: '2022.10',
      role: '퍼블리셔',
      teamSize: '퍼블리싱 2명, 외부 개발',
      tags: ['HTML5', 'jQuery', 'SCSS', 'swiper.js', 'Bootstrap'],
      overview:
        '셀트리온 뷰티몰의 모바일 사이트 메인과 서브페이지, 상세페이지 구축을 하였습니다. 어떤 디바이스에서 접속해도 동일한 화면이 나올 수 있도록 모바일 반응형을 체크하며 마크업하였습니다. 또한 셀트리온 뷰티몰의 디자인 시스템을 기반으로 마크업하였습니다.',
      techStack: ['HTML5', 'jQuery', 'SCSS', 'swiper.js', 'Bootstrap'],
      contributions: [
        {
          title: '모바일 반응형 페이지 마크업 및 구축',
          description:
            '셀트리온 뷰티몰의 메인, 서브페이지, 상세페이지 전체 구축을 담당했습니다. 모든 디바이스에서 동일한 화면을 제공하는 모바일 반응형을 체크하며 마크업하여 접근성을 확보했습니다.'
        },
        {
          title: '디자인 시스템 기반 마크업 구현',
          description:
            '셀트리온 뷰티몰의 디자인 시스템 가이드라인을 기반으로 마크업을 진행하여, 웹사이트 전체 페이지의 일관성과 통일된 사용자 경험(UI/UX)을 구현했습니다.'
        }
      ],   
      challenges: [],
      links: {
        isService: true,
        live: 'https://m.celltrionmall.com/main',
        github: null
      }
    },
    {
      id: 9,
      title: 'SEP - SK에코플랜트 안전신고 앱',
      description: 'SK에코플랜트 현장에서 안전 신고를 할 수 있는 앱입니다.',
      thumbnail: '/images/projects/project3-thumb.jpg',
      mainImage: '/images/projects/project3-main.jpg',
      period: '2022.09',
      role: '퍼블리셔',
      teamSize: '퍼블리싱 1명, 외부 개발',
      tags: ['HTML5', 'jQuery', 'SCSS', 'swiper.js', 'Bootstrap', 'chart.js', 'fullCalendar.js'],
      overview:
        'SK에코플랜트의 근로자와 관리자가 현장을 관리할 수 있는 안전신고 플랫폼 앱입니다. 앱은 태블릿과 모바일 사이즈에 맞추어 제작되었으며, 관리자 페이지는 풀 반응형으로 사용자가 사용하는 기기에 맞추어 편리하게 이용할 수 있도록 하였습니다.',
      techStack: ['HTML5', 'jQuery', 'SCSS', 'swiper.js', 'Bootstrap', 'chart.js', 'fullCalendar.js'],
      contributions: [
        {
          title: '프론트 앱 및 관리자 화면 구축',
          description:
            '사용자와 관리자 화면을 모두 구축하고, 사용자 유형에 따라 레이아웃이 변경되는 구조를 반영하여 작업했습니다.'
        },
        {
          title: '데이터 시각화 기능 구현',
          description:
            '안전사고 데이터를 차트 형태로 시각화하기 위해 Chart.js를 적용해 사용자들이 데이터를 직관적으로 확인할 수 있도록 구성했습니다.'
        },
        {
          title: '캘린더 기반 출퇴근 및 사고 관리 기능 개발',
          description:
            'FullCalendar.js를 사용해 출퇴근 기록 및 사고 정보를 캘린더에서 바로 확인할 수 있도록 기능을 구현했습니다.'
        },
        {
          title: 'React 기반 플러그인 호환성 검증',
          description:
            'React 환경에서 사용 가능한 라이브러리를 검토 후 적용하며 안정적인 기능 구현을 지원했습니다.'
        },
        {
          title: '모바일·태블릿 최적화 반응형 UI 구현',
          description:
            '모바일 최소 해상도부터 태블릿까지를 지원하도록 반응형 형태로 구축하여 다양한 사용 환경에서 동일한 사용자 경험을 제공했습니다.'
        }
      ],   
      challenges: [],
      links: {
        isService: false,
        live: '',
        github: null
      }
    },
    {
      id: 10,
      title: '이지다이아텍',
      description: '다중검지 진단솔루션을 개발하는 이지다이아텍의 웹사이트입니다.',
      thumbnail: '/images/projects/project3-thumb.jpg',
      mainImage: '/images/projects/project3-main.jpg',
      period: '2022.02',
      role: '퍼블리셔',
      teamSize: '디자이너 1명, 퍼블리셔 2명, 외부 개발',
      tags: ['HTML5', 'jQuery', 'CSS', 'swiper.js', 'Bootstrap'],
      overview:
        '제약회사 안국약품의 기존 웹사이트를 리뉴얼한 프로젝트입니다. 풀 반응형으로 제작되었으며, 기존의 개발 소스를 이용하여 페이지 디자인을 바꾸는 형식으로 진행되었습니다.',
      techStack: ['HTML5', 'jQuery', 'CSS', 'swiper.js', 'Bootstrap'],
      contributions: [
        {
          title: '기존 개발 구조 분석 및 유지',
          description:
            '기존 홈페이지 소스를 분석하여 개발 구조를 파악하고, 리뉴얼 과정에서 구조적 충돌이나 기능 누락이 발생하지 않도록 주도적으로 검수하고 유지했습니다.'
        },
        {
          title: '우선순위 기반 퍼블리싱 및 일정 관리',
          description:
            '프로젝트 일정에 차질이 없도록 게시판·폼 등 개발 우선도가 높은 페이지를 선행 개발하여 전체 일정 관리와 리소스 분배를 최적화했습니다.'
        },
        {
          title: '게시판·폼 페이지 퍼블리싱',
          description:
            '데이터 입력 및 관리가 필요한 게시판과 폼이 포함된 페이지를 우선적으로 퍼블리싱하고 기능 연계에 맞춰 마크업과 스타일을 구현했습니다.'
        },
        {
          title: '다국어 지원 퍼블리싱 및 레이아웃 안정화',
          description:
            '다국어 페이지 특성을 고려하여 언어별 텍스트 길이·레이아웃 변동을 점검하고 수정하여 언어 전환 시에도 UI가 깨지지 않도록 안정화했습니다.'
        },
        {
          title: '풀 반응형 전환 및 크로스 디바이스 최적화',
          description:
            '기존 사이트를 풀 반응형으로 재구성하여 모바일·태블릿·데스크탑 전 환경에서 일관된 정보 접근성과 사용성을 제공하도록 구현했습니다.'
        }
      ],      
      challenges: [],
      links: {
        isService: true,
        live: 'https://www.ezdiatech.com/',
        github: null
      }
    },
    {
      id: 11,
      title: '안국약품',
      description: '제약회사 안국약품의 풀 반응형 웹사이트입니다.',
      thumbnail: '/images/projects/project3-thumb.jpg',
      mainImage: '/images/projects/project3-main.jpg',
      period: '2022.01',
      role: '퍼블리셔',
      teamSize: '디자이너 2명, 퍼블리셔 3명, 기존 개발 활용(리뉴얼)',
      tags: ['HTML5', 'jQuery', 'CSS', 'swiper.js', 'Bootstrap'],
      overview:
        '제약회사 안국약품의 기존 웹사이트를 리뉴얼한 프로젝트입니다. 풀 반응형으로 제작되었으며, 기존의 개발 소스를 이용하여 페이지 디자인을 바꾸는 형식으로 진행되었습니다. ',
      techStack: ['HTML5', 'jQuery', 'CSS', 'swiper.js', 'Bootstrap'],
      contributions: [
        {
          title: '기존 개발 구조 분석 및 유지',
          description:
            '기존 홈페이지 개발 소스를 분석하여 전체 구조를 파악하고, 리뉴얼 과정에서 기능 누락 및 충돌이 발생하지 않도록 유지하며 진행했습니다.'
        },
        {
          title: '우선순위 기반 퍼블리싱 및 일정 관리',
          description:
            '개발 우선도가 높은 게시판 및 폼 기반 페이지를 먼저 퍼블리싱하여 전체 개발 일정이 원활히 진행될 수 있도록 지원했습니다.'
        },
        {
          title: '게시판 및 폼 페이지 퍼블리싱',
          description:
            '데이터 입력 및 관리가 필요한 주요 게시판과 폼 페이지를 퍼블리싱하고 UI/UX 흐름에 맞게 구조화했습니다.'
        },
        {
          title: '다국어 지원 퍼블리싱',
          description:
            '일부 페이지의 다국어 지원에 따라 언어별 텍스트 길이 차이로 인한 UI 깨짐이 발생하지 않도록 레이아웃을 안정적으로 구현했습니다.'
        },
        {
          title: '풀 반응형 전환 및 디바이스 최적화',
          description:
            '기존 사이트를 풀 반응형으로 전환하여 모바일, 태블릿, 데스크탑 등 다양한 환경에서 일관된 사용자 경험을 제공했습니다.'
        }
      ]
      ,      
      challenges: [],
      links: {
        isService: true,
        live: 'https://www.ahn-gook.com/',
        github: null
      }
    },
    {
      id: 12,
      title: 'AWONDER',
      description: '안국약품의 건강기능식품 브랜드&쇼핑몰 AWONDER의 웹사이트입니다.',
      thumbnail: '/images/projects/project3-thumb.jpg',
      mainImage: '/images/projects/project3-main.jpg',
      period: '2021.04 ~ 2023.01',
      role: '퍼블리셔',
      teamSize: '디자이너 4명, 퍼블리셔 5명, 개발 3명',
      tags: ['HTML5', 'jQuery', 'CSS', 'swiper.js', 'Bootstrap'],
      overview:
        '안국약품의 건강기능식품 브랜드 에이원더의 쇼핑몰입니다. ',
      techStack: ['HTML5', 'jQuery', 'CSS', 'swiper.js', 'Bootstrap'],
      contributions: [
        {
          title: '웹 접근성 개선 및 인증 획득',
          description:
            '기존 코드의 접근성 미비 요소를 전면적으로 수정하고 스크린 리더 사용 테스트를 반복하며 개선을 진행해, 웹 접근성 품질인증마크를 획득했습니다.'
        },
        {
          title: '접근성 표준 기반 마크업 수정',
          description:
            'ARIA 속성, 키보드 포커스 흐름, 대체 텍스트 등 접근성 기준에 맞춰 코드 구조를 재정리하고 개선했습니다.'
        },
        {
          title: 'SEO 최적화 작업',
          description:
            '검색 엔진 노출을 강화하기 위해 메타 태그, 구조화된 헤딩 설계 등 전반적인 SEO 개선 작업을 수행했습니다.'
        },
        {
          title: '선형 구조 기반 퍼블리싱',
          description:
            '스크린 리더 사용자를 고려하여 UI 구조의 논리적 순서를 재정비하고 의미 기반 HTML 요소로 마크업했습니다.'
        },
        {
          title: '일부 서브페이지 퍼블리싱',
          description:
            '에이원더 웹사이트의 일부 서브페이지를 퍼블리싱하며 전체적인 사용자 경험 품질을 유지했습니다.'
        }
      ]
      ,      
      challenges: [],
      links: {
        isService: false,
        live: 'https://sketchbook.kr/book/202102',
        github: null
      }
    },
    {
      id: 13,
      title: 'DAEDONG',
      description: '농기계 솔루션 DAEDONG의 기업 웹사이트입니다.',
      thumbnail: '/images/projects/project3-thumb.jpg',
      mainImage: '/images/projects/project3-main.jpg',
      period: '2021.09',
      role: '퍼블리셔',
      teamSize: '퍼블리셔 3명, 외부 디자인, 외부 개발',
      tags: ['HTML5', 'jQuery', 'CSS', 'swiper.js', 'Bootstrap'],
      overview:
        '농기계 솔루션 기업 Daedong의 웹사이트를 제작하였습니다. ',
      techStack: ['HTML5', 'jQuery', 'CSS', 'swiper.js', 'Bootstrap'],
      contributions: [
        {
          title: '서브페이지 퍼블리싱',
          description:
            '대동 웹사이트의 일부 서브페이지를 퍼블리싱하며 UI 구조와 기존 스타일 가이드를 기반으로 일관된 화면 요소를 구현했습니다.'
        },
        {
          title: '컴포넌트 기반 구조 설계',
          description:
            '디자인 시안을 분석해 반복적으로 사용되는 UI 요소를 컴포넌트화하여 재사용성을 높이고 퍼블리싱 작업 효율을 향상시켰습니다.'
        },
        {
          title: '풀 반응형 퍼블리싱',
          description:
            '웹, 태블릿, 모바일 환경에서 동일한 접근성과 사용성을 제공할 수 있도록 레이아웃을 최적화해 반응형 UI를 구현했습니다.'
        },
        {
          title: '사용자 경험 중심 UI 구현',
          description:
            '정보 탐색 과정에서 불편함이 없도록 콘텐츠 흐름과 시각적 구조를 조정해 UX 품질을 유지했습니다.'
        }
      ],      
      challenges: [],
      links: {
        isService: true,
        live: 'https://ko.daedong.co.kr/',
        github: null
      }
    },
    {
      id: 14,
      title: '한국관광대학교',
      description: '한국관광대학교의 메인 웹사이트를 구축하였습니다.',
      thumbnail: '/images/projects/project3-thumb.jpg',
      mainImage: '/images/projects/project3-main.jpg',
      period: '2021.09~2021.11',
      role: '퍼블리셔',
      teamSize: '퍼블리셔 3명, 디자이너 2명, 개발 3명',
      tags: ['HTML5', 'jQuery', 'CSS', 'swiper.js', 'Bootstrap', 'fullCalendar.js'],
      overview:
        '한국관광대학교의 메인 웹사이트를 리뉴얼하였습니다.',
      techStack: ['HTML5', 'jQuery', 'CSS', 'swiper.js', 'Bootstrap', 'fullCalendar.js'],
      contributions: [
        {
          title: '서브페이지 퍼블리싱',
          description:
            '한국관광대학교 웹사이트의 일부 서브페이지를 퍼블리싱하며 전체 구조와 스타일 가이드에 맞춰 일관된 UI를 구현했습니다.'
        },
        {
          title: '반응형 레이아웃 구현',
          description:
            '데스크톱, 태블릿, 모바일 등 다양한 디바이스 환경에서 문제가 없도록 풀 반응형 기반으로 화면을 설계하고 퍼블리싱했습니다.'
        },
        {
          title: '사용성 중심 화면 구성',
          description:
            '사용자가 어떤 환경에서도 정보 접근에 불편함이 없도록 구조 안정성과 콘텐츠 가독성을 고려해 UI를 구현했습니다.'
        }
      ],      
      challenges: [],
      links: {
        isService: true,
        live: 'https://www.ktc.ac.kr/main',
        github: null
      }
    },
    {
      id: 15,
      title: '한국관광대학교 입학처',
      description: '한국관광대학교 입학처의 웹사이트를 구축하였습니다.',
      thumbnail: '/images/projects/project3-thumb.jpg',
      mainImage: '/images/projects/project3-main.jpg',
      period: '2021.09~2021.11',
      role: '퍼블리셔',
      teamSize: '퍼블리셔 3명, 디자이너 2명, 개발 3명',
      tags: ['HTML5', 'jQuery', 'CSS', 'swiper.js', 'Bootstrap', 'fullCalendar.js'],
      overview:
        '한국관광대학교 입학처의 웹사이트입니다. 풀반응형으로 제작되었으며, 수험생을 비롯한 입시 관계자가 어떤 환경에서도 편리하게 이용할 수 있도록 하였습니다.',
      techStack: ['HTML5', 'jQuery', 'CSS', 'swiper.js', 'Bootstrap', 'fullCalendar.js'],
      contributions: [
        {
          title: '서브페이지 퍼블리싱',
          description:
            '한국관광대학교 입학처 웹사이트의 서브페이지를 퍼블리싱하며 디자인 가이드와 정보 구조에 맞춘 화면을 구축했습니다.'
        },
        {
          title: '컴포넌트 기반 페이지 설계',
          description:
            '반복되는 페이지 구조를 분석해 컴포넌트화하여 재사용 가능한 구조를 설계하고, 유지보수성과 작업 효율을 향상시켰습니다.'
        },
        {
          title: '반복 페이지 템플릿화',
          description:
            '모집학과소개 페이지와 같이 동일 레이아웃이 반복되는 화면은 템플릿을 생성해 내용만 변경하여 사용할 수 있도록 구성했습니다.'
        },
        {
          title: '작업 효율 및 확장성 강화',
          description:
            '동일 구조의 페이지 추가 시 빠르게 대응할 수 있는 퍼블리싱 방식으로 향후 유지보수 및 확장성을 높였습니다.'
        }
      ],      
      challenges: [],
      links: {
        isService: true,
        live: 'https://iphak.ktc.ac.kr/',
        github: null
      }
    },
    {
      id: 16,
      title: 'LG전자 스토리 컨텐츠',
      description: 'LG전자의 제품을 프로모션하는 스토리 컨텐츠를 제작하였습니다.',
      thumbnail: '/images/projects/project3-thumb.jpg',
      mainImage: '/images/projects/project3-main.jpg',
      period: '2021.07~2021.09',
      role: '퍼블리셔',
      teamSize: '퍼블리셔 4명(개별 페이지 퍼블리싱), 디자이너 1명',
      tags: ['HTML5', 'jQuery', 'CSS'],
      overview:
        'LG전자의 제품을 활용하는 프로모션 컨텐츠의 개별 페이지들을 퍼블리싱하였습니다. ',
      techStack: ['HTML5', 'jQuery', 'CSS'],
      contributions: [
        {
          title: '프로모션 페이지 퍼블리싱',
          description:
            '블로그 및 스토리형 프로모션 페이지를 퍼블리싱하고, 다양한 스크롤 기반 애니메이션을 적용해 사용자가 LG 가전제품의 기능과 편리함을 보다 직관적으로 이해할 수 있도록 구현했습니다.'
        }        
      ],      
      challenges: [],
      links: {
        isService: true,
        live: [
          {
            label: 'LG 올레드 갤러리 TV',
            url: 'https://www.lge.co.kr/story/hands-on-reviews/how-to-tv1'
          },
          {
            label: 'LG DIOS 광파오븐',
            url: 'https://www.lge.co.kr/story/hands-on-reviews/ovens'
          },
          {
            label: 'LG트롬 워시타워',
            url: 'https://www.lge.co.kr/story/hands-on-reviews/wash-tower'
          },
          {
            label: '듀얼 정수기',
            url: 'https://www.lge.co.kr/story/hands-on-reviews/water-purifiers'
          },
        ],
        github: null
      }
    },
    {
      id: 17,
      title: '1인1악기',
      description: '서초구 1인1악기 프로젝트의 홈페이지입니다.',
      thumbnail: '/images/projects/project3-thumb.jpg',
      mainImage: '/images/projects/project3-main.jpg',
      period: '2020.12',
      role: '퍼블리셔',
      teamSize: '퍼블리셔 3명, 디자이너 1명, 개발 1명',
      tags: ['HTML5', 'jQuery', 'CSS', 'Bootstrap'],
      overview:
        '서초구 초등학교 1인 1악기 프로젝트의 캐릭터 액션을 맡아 진행하였습니다 ',
      techStack: ['HTML5', 'jQuery', 'CSS', 'Bootstrap'],
      contributions: [
        {
          title: '어린이 대상 콘텐츠의 캐릭터 모션 애니메이션 구현',
          description:
            '서초구 초등학교 1인 1악기 프로젝트 홈페이지의 서브페이지 퍼블리싱을 담당했습니다. 주 사용자층인 아이들의 흥미를 유발하기 위해 캐릭터 모션 애니메이션을 추가하여 아기자기하고 생동감 있는 사용자 경험을 제공했습니다.'
        }
      ],      
      challenges: [],
      links: {
        isService: true,
        live: 'https://soundofseocho.or.kr/main/about',
        github: null
      }
    },
  ]
  
  // 특정 프로젝트 ID로 조회하는 헬퍼 함수
  export const getProjectById = (id) => {
    return projects.find((project) => project.id === parseInt(id))
  }
  
  // 최신 프로젝트 N개 가져오기
  export const getRecentProjects = (count = 3) => {
    return projects.slice(0, count)
  }
  
  // 태그로 필터링
  export const getProjectsByTag = (tag) => {
    return projects.filter((project) => project.tags.includes(tag))
  }