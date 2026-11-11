'use strict';
// 역량기술서 v2.1에서 확인되는 내용만 정리. 세부 성과는 제공된 GitHub 보고서 기준.
const PORTFOLIO = {
  quantReports: [
  {
    "id": "kr",
    "title": "국내 주식 전략",
    "subtitle": "업종 내 순위 모멘텀·업종당 최대 2종목",
    "period": "2016.01.04 – 2026.09.21",
    "benchmark": "KOSPI200",
    "image": "assets/kr_stock_case.png",
    "overview": "KOSPI 보통주 중 전월 평균 시가총액 상위 100개를 대상으로 같은 업종 내부에서 주가 움직임의 상대 순위를 계산해 상위 5개를 선정하는 전략 실험. 업종당 최대 2개까지 편입하고 월별로 동일비중 재조정.",
    "strategy": [
      [
        "투자 대상",
        "KOSPI 보통주 중 전월 평균 시가총액 상위 100개"
      ],
      [
        "순위 신호",
        "전월 말 기준 동일 업종(종목 3개 이상)에서 일별 수익률 백분위 순위를 계산, 월평균을 최근 3개월 제외 9개월 동안 합산"
      ],
      [
        "사례 설정",
        "모멘텀 12개월·최근 3개월 제외"
      ],
      [
        "종목 선정",
        "상위 5개 종목, 업종당 최대 2개"
      ],
      [
        "투자 비중",
        "종목당 20% 동일비중, 월별 재조정"
      ],
      [
        "체결 제약",
        "거래량이 없는 날 주문 연기, 상장폐지 보유분은 마지막 유효 가격으로 정산"
      ],
      [
        "거래비용 가정",
        "수수료 0.15%·슬리피지 0.10%"
      ]
    ],
    "metrics": [
      [
        "연평균 수익률(CAGR)",
        "37.61%",
        "16.09%"
      ],
      [
        "최대낙폭(MDD)",
        "-57.79%",
        "-41.19%"
      ],
      [
        "샤프 비율",
        "1.22",
        "0.72"
      ]
    ],
    "validation": [
      [
        "후보군",
        "모멘텀 9·12·15·18개월 × 최근 제외 0·1·2·3개월 = 16개"
      ],
      [
        "SPA",
        "p=0.0246 (5,000회 재표집)"
      ],
      [
        "PBO",
        "19.44%"
      ],
      [
        "Walk-Forward (rolling)",
        "CAGR 18.13% · 최대낙폭 -56.56%"
      ],
      [
        "Walk-Forward (expanding)",
        "CAGR 21.18% · 최대낙폭 -50.31%"
      ],
      [
        "Walk-Forward 벤치마크",
        "동일 평가기간 KOSPI200 CAGR 8.52% · 최대낙폭 -41.05%"
      ],
      [
        "OOS 평가기간",
        "2018.01.04 – 2026.01.02"
      ]
    ],
    "interpretation": "전체 기간 고정 전략과 Walk-Forward는 후보 선택·평가 방식이 다른 수치. 국내 주식의 전체 기간 CAGR 37.61%는 일봉 수익률의 연 252개 관측치 기준으로 계산했으며, 달력일 기준으로 누적수익률을 단순 연환산한 값과 다를 수 있음. Walk-Forward는 별도 OOS 평가기간의 달력일 연환산 성과임. 전체 기간 CAGR은 KOSPI200보다 21.52%p 높았지만 최대낙폭은 16.60%p 컸음. 특정 종목에 대한 수익 기여 집중도도 함께 고려할 필요가 있음(SK하이닉스·SK스퀘어·삼성전자 순손익 45.6%). 후보군은 다른 접근법을 비교한 뒤 구성했으므로 검증 수치를 무조건적인 미래 성과의 증거로 해석할 수 없음.",
    "sourceAnchor": "strategy-kr-stock"
  },
  {
    "id": "us",
    "title": "미국 ETF 전략",
    "subtitle": "1배 ETF 순위 모멘텀·절대 모멘텀·추세·변동성 필터",
    "period": "2012.05.01 – 2026.05.29",
    "benchmark": "원화 환산 SPY",
    "image": "assets/us_etf_case.png",
    "overview": "미국 상장 1배 ETF 17개(섹터·국가·규모·금·장기채 고정 목록)를 대상으로 상대 순위 모멘텀과 절대 모멘텀, 상승월·추세 지속성·변동성 조건을 결합해 상위 최대 2개에 투자하는 전략 실험. 비교 기준은 원화 환산 SPY.",
    "strategy": [
      [
        "투자 대상",
        "미국 상장 1배 ETF 17개(섹터 12개·국가/규모 3개·금/장기채 2개)"
      ],
      [
        "순위 신호",
        "일별 ETF 간 수익률 순위 → 월평균 → 최근 12개월 중 1개월 제외한 11개월 합산"
      ],
      [
        "절대 모멘텀",
        "126거래일 수익률 > 0%"
      ],
      [
        "상승월 조건",
        "최근 20개월 중 상승월 11개월 이상"
      ],
      [
        "추세 지속성",
        "252거래일 상승일 비율의 전월 평균 기준, ETF 간 하위 10% 제외"
      ],
      [
        "변동성 필터",
        "10일 실현변동성의 252일 자기 백분위 ≤ 97.5%"
      ],
      [
        "종목 선정",
        "조건 통과 상위 최대 2개"
      ],
      [
        "투자 비중",
        "2개 선정 시 각 50%, 1개 선정 시 100%"
      ],
      [
        "조정 주기",
        "선정 종목 변경 시"
      ],
      [
        "거래비용 가정",
        "수수료 0.05%·슬리피지 0%"
      ]
    ],
    "metrics": [
      [
        "연평균 수익률(CAGR)",
        "21.52%",
        "17.08%"
      ],
      [
        "최대낙폭(MDD)",
        "-21.82%",
        "-29.62%"
      ],
      [
        "샤프 비율",
        "1.19",
        "1.00"
      ]
    ],
    "validation": [
      [
        "후보군",
        "모멘텀 9·12·15개월 × 절대 모멘텀 63·126·252일 × 종목 수 1·2·3·5개 = 36개"
      ],
      [
        "SPA",
        "p=0.2302 (SPY 대비 초과수익·5,000회 재표집)"
      ],
      [
        "PBO",
        "7.50% (SPY 대비 AIR)"
      ],
      [
        "Walk-Forward 설정",
        "IS 24개월(Rolling 이동, Expanding 시작 고정) · STEP/OOS 각 24개월 · 6개 적용 구간"
      ],
      [
        "Walk-Forward (rolling)",
        "CAGR 23.82% · 최대낙폭 -23.55%"
      ],
      [
        "Walk-Forward (expanding)",
        "CAGR 19.09% · 최대낙폭 -24.82%"
      ],
      [
        "Walk-Forward 벤치마크",
        "동일 평가기간 원화 환산 SPY CAGR 17.17% · 최대낙폭 -29.62%"
      ],
      [
        "OOS 평가기간",
        "2014.05.01 – 2026.04.30"
      ]
    ],
    "interpretation": "전체 기간 고정 전략과 Walk-Forward는 평가 기간과 후보 선정 방식이 다름. OOS CAGR은 Rolling 23.82%, Expanding 19.09%로 동일 평가기간 SPY 17.17%와 구분해 비교해야 함. SPA p값 0.2302로 SPY 대비 초과성과의 통계적 유의성은 확인되지 않았고, 36개 후보 중 정보비율이 양수인 후보는 18개. SPY 수정주가를 환율로 원화 환산했으며 SPY 매수·보유에는 별도 거래 수수료를 반영하지 않음.",
    "sourceAnchor": "strategy-us-etf"
  },
  {
    "id": "btc",
    "title": "BTC 현물 전략",
    "subtitle": "이동평균·변동성 조건을 활용한 매매",
    "period": "2019.09.25 – 2026.10.27",
    "benchmark": "BTC 단순 보유",
    "image": "assets/btc_spot_case.png",
    "overview": "가격 추세와 변동성 조건에 따라 BTC 현물 보유 비중을 0% 또는 100%로 전환하는 전략 실험.",
    "strategy": [
      [
        "투자 대상",
        "KRW-BTC 현물"
      ],
      [
        "매매 조건",
        "10시간 이동평균이 120시간 이동평균보다 높고, 최근 변동성이 기준 이하인 경우 매수"
      ],
      [
        "투자 비중",
        "조건 충족 시 BTC 100%, 미충족 시 현금 100%"
      ],
      [
        "실행 기준",
        "1시간봉 종가로 계산하고 다음 봉 시가에 반영"
      ],
      [
        "거래비용 가정",
        "수수료 0.05%·슬리피지 0%"
      ]
    ],
    "metrics": [
      [
        "연평균 수익률(CAGR)",
        "80.03%",
        "38.90%"
      ],
      [
        "최대낙폭(MDD)",
        "-35.78%",
        "-74.85%"
      ],
      [
        "샤프 비율",
        "1.91",
        "0.88"
      ]
    ],
    "validation": [
      [
        "후보군",
        "이동평균·변동성 제한 조건 27개"
      ],
      [
        "SPA",
        "p=0.2627"
      ],
      [
        "PBO",
        "32.99%"
      ],
      [
        "Walk-Forward 설정",
        "IS 24개월(Rolling 이동, Expanding 시작 고정) · STEP/OOS 각 12개월 · 5개 적용 구간"
      ],
      [
        "Walk-Forward (rolling)",
        "CAGR 35.56% · 최대낙폭 -36.28%"
      ],
      [
        "Walk-Forward (expanding)",
        "CAGR 40.75% · 최대낙폭 -36.28%"
      ],
      [
        "Walk-Forward 벤치마크",
        "동일 평가기간 BTC 보유 CAGR 17.47% · 최대낙폭 -74.85%"
      ],
      [
        "OOS 평가기간",
        "2021.09.25 03:00 – 2026.09.25 02:00 UTC"
      ]
    ],
    "interpretation": "전체 기간 고정 사례와 Walk-Forward는 평가 기간과 후보 선택 방식이 다름. OOS CAGR은 Rolling 35.56%, Expanding 40.75%로 동일 기간 BTC 보유 17.47%와 구분해 비교해야 함. SPA p값 0.2627로 BTC 보유 대비 초과성과의 통계적 유의성은 확인되지 않음.",
    "sourceAnchor": "strategy-btc-spot"
  },
  {
    "id": "futures",
    "title": "알트코인 선물 롱·숏 전략",
    "subtitle": "거래대금·최근 수익률로 나눈 72개 조합 비교",
    "period": "2020.01.01 – 2026.10.27",
    "benchmark": "BTC 가격 보유",
    "image": "assets/alt_futures_case_preview.png",
    "overview": "BTC를 제외한 USDT 무기한 선물을 거래대금과 최근 수익률에 따라 9개 그룹으로 분류하고, 다른 두 그룹을 롱·숏으로 배정한 72개 조합을 비교한 실험.",
    "strategy": [
      [
        "분류 기준",
        "최근 7일 거래대금과 수익률을 각각 하위·중간·상위 3구간으로 나눠 9개 그룹 구성"
      ],
      [
        "비교 방법",
        "롱 9개 그룹 × 다른 숏 8개 그룹 = 72개 조합"
      ],
      [
        "투자 비중",
        "롱 50%·숏 50%, 각 방향 동일 비중"
      ],
      [
        "조정 주기",
        "매주 월요일 00:00 UTC"
      ],
      [
        "비용·체결 가정",
        "수수료 0.05%·슬리피지 0.02%, 펀딩·강제청산 반영"
      ]
    ],
    "metrics": [
      [
        "연평균 수익률(CAGR)",
        "40.88%",
        "42.55%"
      ],
      [
        "최대낙폭(MDD)",
        "-35.05%",
        "-77.24%"
      ],
      [
        "샤프 비율",
        "1.32",
        "0.89"
      ]
    ],
    "validation": [
      [
        "전체 조합",
        "72개 중 누적수익률 양수 22개"
      ],
      [
        "표시 사례",
        "전체 기간 누적수익률 1위 조합"
      ],
      [
        "SPA·PBO·Walk-Forward",
        "이 실험에서는 미실시"
      ],
      [
        "성과 선택 시점",
        "전체 기간 결과를 확인한 후 상위 조합 선정"
      ]
    ],
    "interpretation": "1위 조합은 전체 기간 결과를 보고 선정했으므로 독립적인 표본 외 검증 성과로 해석할 수 없음. BTC 보유는 거래비용·펀딩을 제외한 가격 수익률.",
    "sourceAnchor": "strategy-alt-futures"
  }
],
  projects: [
    {
      id:'quant', featured:true, title:'퀀트 리서치·자동매매 시스템', short:'정량 투자전략 연구·백테스트 검증 및 주문 자동화 기능 구현', date:'2026.03 — 현재', affiliation:'개인 프로젝트',
      intro:'국내외 주식·ETF와 가상자산을 대상으로 정량 투자전략을 연구하고, 백테스트·통계적 검증부터 주문 실행과 계좌 관리까지 구현',
      cards:[
        {heading:'목적', items:[['정량 투자전략 연구','데이터와 매매 규칙을 활용해 종목 선정·투자 비중을 결정하는 전략 연구'],['백테스트·통계적 검증','과거 시장 데이터로 전략의 수익과 위험을 분석하고 과최적화 가능성 점검'],['자동매매 시스템 구축','전략의 목표 투자 비중을 주문 계획과 체결·계좌 관리로 연결']]},
        {heading:'수행 내용', items:[['전략 엔진 구현','매매 신호·필터·종목 선정·투자 비중 규칙을 조합할 수 있도록 구현'],['성과·안정성 검증','과거 수익률과 최대 손실폭 분석, 기간을 나눈 재검증 및 통계적 검증'],['시장별 전략 실험','국내 주식·미국 ETF·BTC 현물 전략 검증 및 알트코인 선물 롱·숏 조합의 위험·거래비용 비교'],['주문·계좌 관리','목표 비중과 보유량을 비교해 주문 수량 계산, 주문 제출·체결 확인·상태 기록']]},
        {heading:'구현 결과', items:[['전략 연구·백테스트 환경','종목 선정·비중 계산부터 여러 조건의 백테스트와 성과 비교까지 수행하는 시스템 구축'],['통계적 검증 기능','Walk-Forward·PBO·SPA·StepM 검증과 분석 결과 저장·조회 기능 구현'],['자동매매 운영 기능','주문 계획·제출, 체결 확인, 계좌 상태 기록, 중복 주문 방지 및 알림 기능 구현']]}
      ],
      skills:['Python','금융 데이터 처리','백테스트','통계적 검증','투자전략 구현','주문·계좌 관리'],
      links:[{label:'GitHub 저장소',url:'https://github.com/Choe-Useong/quant-trading-system'},{label:'백테스트·검증 보고서',url:'#/projects/quant/reports'}],
      visuals:[
        {title:'시스템 아키텍처',description:'데이터 준비, 투자전략 계산, 성과 검증, 주문·계좌 관리 기능의 전체 구성도',src:'https://raw.githubusercontent.com/Choe-Useong/quant-trading-system/main/notes/assets/system_architecture.png',source:'https://github.com/Choe-Useong/quant-trading-system/blob/main/notes/assets/system_architecture.png',kind:'architecture',altSteps:['데이터 수집·캐시','전략 신호·선정','목표 비중 계산','검증 및 주문 관리']},
        {title:'국내 주식 백테스트 사례',description:'2016.01~2026.09 업종 내 순위 모멘텀 전략의 전체 기간 CAGR 37.61%(KOSPI200 16.09%), 최대낙폭 -57.79%. Walk-Forward CAGR은 rolling 18.13%, expanding 21.18%(동일 평가기간 KOSPI200 8.52%).',src:'assets/kr_stock_case.png',source:'https://github.com/Choe-Useong/quant-trading-system/blob/main/notes/assets/kr_stock_case.png',reportId:'kr',kind:'chart',altMetrics:[['전략 CAGR','37.61%'],['KOSPI200 CAGR','16.09%'],['WF rolling','18.13%'],['WF expanding','21.18%']]},
        {title:'미국 ETF 백테스트 사례',description:'2012.05~2026.05 미국 1배 ETF 17개를 대상으로 한 전략의 전체 기간 CAGR 21.52%(원화 환산 SPY 17.08%), 최대낙폭 -21.82%. Walk-Forward OOS CAGR은 Rolling 23.82%, Expanding 19.09%(동일 평가기간 SPY 17.17%).',src:'assets/us_etf_case.png',source:'https://github.com/Choe-Useong/quant-trading-system/blob/main/notes/assets/us_etf_case.png',reportId:'us',kind:'chart',altMetrics:[['전략 CAGR','21.52%'],['SPY CAGR','17.08%'],['WF Rolling','23.82%'],['WF Expanding','19.09%']]},
        {title:'BTC 현물 백테스트 사례',description:'2019.09~2026.10 과거 분석의 연평균 수익률 80.03%(BTC 보유 38.90%). Walk-Forward OOS CAGR은 Rolling 35.56%, Expanding 40.75%(동일 평가기간 BTC 보유 17.47%).',src:'assets/btc_spot_case.png',source:'https://github.com/Choe-Useong/quant-trading-system/blob/main/notes/assets/btc_spot_case.png',reportId:'btc',kind:'chart',altMetrics:[['전략 CAGR','80.03%'],['BTC 보유 CAGR','38.90%'],['WF Rolling','35.56%'],['WF Expanding','40.75%']]},
        {title:'알트코인 선물 롱·숏 백테스트 사례',description:'2020.01~2026.10, 거래대금과 최근 수익률로 구분한 9개 그룹의 롱·숏 72개 조합을 비교. 누적수익률 1위 조합의 CAGR 40.88%, 최대낙폭 -35.05%. 비교 기준 BTC 보유 CAGR 42.55%.',src:'assets/alt_futures_case_preview.png',source:'https://github.com/Choe-Useong/quant-trading-system/blob/main/notes/assets/alt_futures_case_preview.png',reportId:'futures',kind:'chart',altMetrics:[['사례 CAGR','40.88%'],['BTC 보유 CAGR','42.55%'],['최대낙폭','-35.05%'],['비교 조합','72개']]}
      ],
      processTitle:'정량 투자전략 연구·검증·운영 과정',
      processSummary:'시장 데이터 준비부터 전략 설계, 백테스트·통계적 검증, 주문·계좌 관리까지 주요 기능과 처리 절차',
      processSteps:[
        ['API로 데이터 수집','국내·미국 주식과 ETF, 가상자산, 환율 등 여러 제공처의 가격·거래 자료 수집'],
        ['원천 데이터 저장','수집한 자료를 원본 기준으로 보관하고, 연구와 실거래에서 함께 쓸 데이터 구성'],
        ['정제·검증','시장별 자료 형식과 기준을 정리하고, 전략 계산에 사용할 데이터 점검'],
        ['전략 설계·계산','종목 선정 기준·매매 신호·위험 필터를 조합해 목표 투자 비중 산출'],
        ['백테스트·검증','과거 수익률·손실폭 분석과 기간 분리 검증, 통계적 방법으로 과최적화 가능성 점검'],
        ['주문·계좌 관리','실제 보유량과 목표 비중을 비교해 주문 계획, 체결 확인 및 계좌 상태 기록']
      ],
      note:'시장별 수익률은 개별 전략의 과거 백테스트 사례이며 시스템 전체 성과가 아님. 미국 ETF 비교 기준은 원화 환산 SPY(S&P 500 추종 ETF). 알트코인 선물은 72개 롱·숏 조합의 누적수익률 1위 사례이며, 다른 3개 시장과 달리 Walk-Forward 검증 수치를 표시하지 않음'
    },
    {
      id:'dart',title:'DART 재무데이터 기반 팩터투자 프레임워크',short:'기업별 공시자료 표준화, 주가 데이터 결합 및 투자지표·성과 계산',date:'2025.08 — 2025.11',affiliation:'개인 프로젝트',
      intro:'기업마다 다른 재무제표 항목을 비교 가능한 형태로 정리하고, 주가·시가총액 자료를 결합해 투자지표를 계산하는 프로그램 개발',
      cards:[
        {heading:'목적',items:[['재무제표 항목 통일','기업별로 다르게 표시된 매출·자산·자본 항목을 동일한 기준으로 정리'],['투자지표 계산','공시 재무정보와 시가총액·주가 자료를 결합한 투자전략 실험']]},
        {heading:'수행 내용',items:[['재무자료 정리','연결재무제표 우선 적용, 항목명 표준화와 누락된 값의 대체 항목 확인'],['누락 항목 점검','기업별·결산연도별 누락 사례 확인 및 추출 기준 보완'],['투자전략 검증','시가총액·거래대금·주가 결합, 투자지표별 종목 선정과 정기 비중 조정']]},
        {heading:'결과',items:[['투자지표 계산','기업 규모·가치·수익성·거래회전율·주가 모멘텀 지표 산출'],['과거 성과 비교','지표별로 선정한 종목의 포트폴리오 수익률과 시장 기준 비교']]}
      ],
      skills:['Python','DART 재무제표','IFRS 태그 정규화','재무·시장 데이터 결합','팩터투자','백테스트'],
      links:[{label:'GitHub 저장소',url:'https://github.com/Choe-Useong/finance-factor_inv'}],
      visuals:[
        {title:'팩터투자 백테스트 결과 예시',description:'선정한 종목의 투자 성과와 비교 기준의 성과를 나타낸 GitHub 공개 그래프',src:'assets/portfolio_vs_benchmark.png',source:'https://github.com/Choe-Useong/finance-factor_inv/blob/main/docs/portfolio_vs_benchmark.png',kind:'chart',altSteps:['DART 재무제표','항목 정규화','투자지표 산출','백테스트·벤치마크']}
      ],
      processTitle:'공시자료를 투자지표로 만드는 과정',
      processSummary:'형식이 서로 다른 기업 재무제표를 비교 가능한 데이터로 정리하고, 시장 자료를 결합해 투자지표와 성과를 계산하는 절차',
      processSteps:[
        ['공시 원문 확보','DART 재무제표 텍스트 파일에서 기업별 재무항목 추출'],
        ['기업별 데이터 정리','기업·결산기준일 단위로 자료를 구분하고 연결·별도 재무제표 확인'],
        ['항목 표준화','IFRS 태그·계정명 통일, 누락 항목 점검과 대체 항목 탐색'],
        ['시장 데이터 결합','시가총액·거래대금·수정주가를 재무정보와 연결'],
        ['투자지표·성과 계산','기업 규모·가치·수익성 등 지표 산출 후 종목 선정과 시장 기준 대비 성과 비교']
      ]
    }
  ],
  research: [
    {
      id:'optimization',title:'시변 기대수익률·공분산 기반 포트폴리오 최적화',short:'시장 변화에 따라 수익률과 위험을 추정해 ETF 9종의 투자 비중 계산',date:'2025.05 — 2025.09',affiliation:'팀 연구 · 제1저자',conference:'ACK 2025',
      intro:'시장 상황에 따라 달라지는 예상 수익률과 위험을 추정하고, ETF 9종의 투자 비중 및 과거 성과 비교',
      abstract:"포트폴리오를 구성할 때 발생하는 기대수익률 추정의 불안정성과 시장 상황에 따른 위험 변화에 대응하기 위한 연구. 상태공간모형으로 자산별 기대수익률을 시점마다 추정하고, James–Stein 수축 추정으로 추정값을 보정. DCC-GARCH로 자산 간 상관관계 변화를 반영해 투자 비중을 계산. 실증분석에서 연평균 성장률 10.91%를 기록했으며, 비교 전략보다 높은 위험 조정 성과 확인.",
      cards:[
        {heading:'연구 목적',items:[['시장 변화 반영','시점별 예상 수익률과 자산 간 움직임 추정'],['자산 배분','미국 상장 ETF 9종의 투자 비중 계산']]},
        {heading:'담당 및 방법',items:[['수익률 추정','Kalman Filter로 예상 수익률 추정, James-Stein 방식으로 추정값 보정'],['위험 추정','DCC-GARCH로 자산 간 수익률 움직임과 위험 변화 계산'],['실험·논문','자산 비중 최적화, 과거 성과 비교, 연구 기획 및 논문 작성']]},
        {heading:'연구 결과',items:[['연평균 수익률','최적화 10.91% · 동일가중 9.54% · SPY 10.22%'],['최대 낙폭','최적화 -49.99% · 동일가중 -51.67%'],['학술 발표','ACK 2025 발표']]}
      ],
      skills:['시계열 모델링','Kalman Filter','James-Stein','DCC-GARCH','포트폴리오 최적화','백테스트'],
      links:[{label:'논문 원문',url:'https://www.manuscriptlink.com/society/kips/conference/ack2025/file/downloadSoConfManuscript/abs/KIPS_C2025B0034F'}],
      note:'성과 비교는 제공된 논문·역량기술서의 과거 분석 결과이며 미래 성과를 뜻하지 않습니다.'
    },
    {
      id:'clustering',title:'공통요인 조정 수익률 기반 주식 군집화',short:'공통적인 시장 영향을 제외하고 주식 간 움직임이 비슷한 종목을 분류',date:'2025.11 — 2026.03',affiliation:'팀 연구 · 제1저자',conference:'ASK 2026',
      intro:'시장·기업규모·가치 요인의 영향을 제외한 주가 움직임을 기준으로 KOSPI 705개 종목의 유사성 분석과 분류',
      abstract:"KOSPI 종목이 함께 움직이는 관계를 파악하기 위해 시장 전체의 영향을 제외한 수익률로 주식을 분류하는 연구. Fama–French 3요인 모형으로 시장·기업규모·가치 요인을 통제하고, 요인 조정 후 남은 수익률 간 상관관계를 활용해 계층적 군집화 수행. 기존 수익률만 사용한 방식보다 군집 내부의 유사성이 높았으며, 산업분류와 일부 일치하면서도 서로 다른 산업에 속한 종목 간의 공통 움직임 확인.",
      cards:[
        {heading:'연구 목적',items:[['공통 시장 영향 구분','여러 종목에 함께 나타나는 수익률 요인의 영향 제외'],['분류 방식 비교','실제 주가 움직임과 기존 산업분류에서 나타나는 종목 관계 비교']]},
        {heading:'담당 및 방법',items:[['수익률 분석','Fama-French 3요인 모형으로 공통요인 조정 수익률 계산'],['유사 종목 분류','잔차 상관관계를 거리로 바꿔 Ward 방법으로 군집화'],['비교 실험','FICS·KSIC 및 원수익률 기반 군집과 비교']]},
        {heading:'연구 결과',items:[['분류 결과 비교','군집 수 10~80개에서 원수익률 방식보다 높은 실루엣 계수'],['산업분류와 비교','기존 산업분류와 겹치는 관계 및 산업 경계를 넘는 종목 관계 관찰'],['학술 발표','ASK 2026 발표']]}
      ],
      skills:['요인모형','상관관계 분석','계층적 군집화','실루엣 계수','Python','비교 실험 설계'],
      links:[{label:'논문 원문',url:'https://ask.kips.or.kr/file/downloadSoConfManuscript/abs/KIPS_C2026A0032F'}]
    },
    {
      id:'rl-portfolio',title:'강화학습 기반 산업 포트폴리오 트레이딩',short:'시장·경제지표·공시정보를 이용한 강화학습 투자모델 실험',date:'2024.11 — 2025.03',affiliation:'팀 연구 · 제1저자',conference:'ASK 2025',
      intro:'산업별 투자 비중을 결정하는 강화학습 모델의 입력 데이터 구성, 평가 방법 설계 및 실험 결과 분석',
      abstract:"시장 지표와 기업 재무정보, 거시경제지표를 활용해 투자 비중을 결정하는 강화학습 기반 주식투자 모델 연구. 2014~2025년 금융·재무 데이터를 바탕으로, CNN 기반 정책 신경망인 EIIE를 이용해 포트폴리오 투자 실험 진행. 단순 매수 후 보유하는 Buy and Hold 전략과 비교한 결과, 강화학습 모델의 수익률 개선 확인.",
      cards:[
        {heading:'연구 목적',items:[['산업별 투자 비중','강화학습으로 투자 대상과 비중을 조정하는 모델 연구']]},
        {heading:'담당 및 방법',items:[['데이터 준비','금융·거시경제·공시 자료 정리 및 실제 이용 가능 시점 반영'],['평가 기준','투자 대상 종목군과 테스트 구간 설계'],['결과 분석','실험 수행 및 논문 작성']]},
        {heading:'연구 결과',items:[['테스트 기간 위험 대비 수익','Sharpe 0.162 · 단순 보유 -0.042'],['최대 낙폭','강화학습 모델 -17.5% · 단순 보유 -31.2%'],['학술 발표','ASK 2025 발표']]}
      ],
      skills:['강화학습 연구','시계열 데이터 정렬','금융 데이터 전처리','백테스트 설계','실험 분석'],
      links:[{label:'논문 원문',url:'https://www.manuscriptlink.com/society/kips/conference/ask2025/file/downloadSoConfManuscript/abs/KIPS_C2025A0027F'}]
    },
    {
      id:'wavelet',title:'웨이블릿 변환과 TFT 기반 주가지수 예측',short:'주가 데이터의 잡음을 줄이는 방법과 주가지수 예측 모델 비교',date:'2024.06 — 2024.10',affiliation:'팀 연구 · 제1저자',conference:'ACK 2024',
      intro:'웨이블릿 변환으로 금융 시계열을 처리하고 TFT 모델을 적용한 주가지수 예측 실험 참여',
      abstract:"금융 시계열 데이터의 잡음이 많고 머신러닝 예측 결과를 해석하기 어렵다는 문제를 다룬 주가지수 예측 연구. 웨이블릿 변환을 적용해 금융 데이터의 잡음을 줄이고, 변수의 중요도와 시점별 영향을 살펴볼 수 있는 Temporal Fusion Transformer(TFT) 모델로 주가지수 예측을 시도. 금융 분야에서 예측 모델의 활용성과 해석 가능성을 높이는 방법 제시.",
      cards:[
        {heading:'연구 목적',items:[['예측 성능 확인','주가 데이터의 잡음 처리와 주가지수 예측 실험']]},
        {heading:'담당 및 방법',items:[['자료 준비','주가지수 예측에 필요한 금융 시계열 데이터 정리'],['노이즈 처리','웨이블릿 변환을 활용한 데이터 처리와 실험 구성'],['연구 수행','연구 기획, 결과 분석, 논문 작성']]},
        {heading:'연구 결과',items:[['학술 발표','ACK 2024 논문 발표']]}
      ],
      skills:['웨이블릿 변환','Temporal Fusion Transformer','금융 시계열','실험 설계','결과 분석'],
      links:[{label:'논문 원문',url:'https://www.manuscriptlink.com/society/kips/conference/ack2024/file/downloadSoConfManuscript/abs/KIPS_C2024B0077'}]
    },
    {
      id:'cvae',title:'CVAE-ANP 산업 공정 이상 탐지 및 진단',short:'제조 공정의 이상 징후를 탐지하는 모델의 실험 코드와 설정값 조정',date:'2026',affiliation:'팀 연구 · 제2저자',conference:'ASK 2026',
      intro:'산업 공정의 이상 징후를 탐지·진단하는 모델 연구에서 실험 코드 구현 및 모델 설정값 조정 담당',
      abstract:"스마트 제조 공정에서 이상 여부뿐 아니라 진단 근거와 예측의 불확실성까지 확인하기 위한 연구. 센서 수치와 이미지 등 서로 다른 종류의 데이터를 분석하도록 CVAE와 ANP를 결합하고, 산출한 불확실성 정보를 바탕으로 XGBoost 이상 진단 수행. 비교 모델보다 높은 분류 정확도를 확인했으며, 현장 관리자가 진단 결과를 검토하는 Human-in-the-Loop 방식의 활용 가능성 제시.",
      cards:[
        {heading:'연구 목적',items:[['이상 징후 탐지','공정 데이터의 비정상 상태를 찾고 원인을 분석하는 모델 연구']]},
        {heading:'담당 및 방법',items:[['실험 구현','실험 코드 구현'],['모델 설정 조정','학습에 사용하는 하이퍼파라미터 튜닝']]},
        {heading:'연구 결과',items:[['학술 성과','ASK 2026 우수논문상'],['논문','제2저자 참여']]}
      ],
      skills:['모델 하이퍼파라미터 튜닝','실험 코드 구현','이상 탐지 연구'],
      links:[{label:'논문 원문',url:'https://ask.kips.or.kr/file/downloadSoConfManuscript/abs/KIPS_C2026A0029F'}]
    },
    {
      id:'transport',title:'군집 알고리즘·강화학습 기반 수송 계획 최적화',short:'차량의 방문 순서와 배송 경로를 계산하는 강화학습 모델 실험',date:'2025.06 — 2025.10',affiliation:'팀 연구 · 제1저자',conference:'ACK 2025',
      intro:'배송·수거 경로를 효율적으로 계획하기 위한 강화학습 환경 및 PPO 에이전트 구현',
      abstract:"배송과 물품 수거가 동시에 발생하는 물류 환경에서 차량 이동 경로를 효율적으로 계산하기 위한 연구. 전체 배송 지역을 정수계획법 기반 군집화로 나누고, 각 구역의 방문 경로를 PPO 강화학습으로 최적화. 복잡한 전체 경로 문제를 구역별 문제로 나눠 계산하고, 기존 휴리스틱 방식보다 빠르고 효율적인 계획 결과 확인.",
      cards:[
        {heading:'연구 목적',items:[['배송 경로 계획','배송 구역 분류와 차량 이동 순서 계산']]},
        {heading:'담당 및 방법',items:[['학습 환경','차량 이동·배송 조건을 반영한 강화학습 환경 설계'],['경로 계획 모델','PPO 기반 에이전트 구현·학습'],['실험','실험 수행 및 결과 분석']]},
        {heading:'연구 결과',items:[['학술 발표','ACK 2025 논문 발표']]}
      ],
      skills:['PPO','강화학습 환경 설계','에이전트 구현','모델 학습','실험 분석'],
      links:[{label:'논문 원문',url:'https://ack.kips.or.kr/file/downloadSoConfManuscript/abs/KIPS_C2025B0035F'}]
    }
  ],
  awards:[
    {id:'ask-award',title:'ASK 2026 우수논문상',short:'CVAE-ANP: 신뢰성 있는 산업 공정 이상 탐지 및 진단',date:'2026',affiliation:'ASK 2026',links:[{label:'관련 논문',url:'https://koreascience.kr/article/CFKO202617661354834.page?&lang=ko'}],abstract:"스마트 제조 공정의 센서·이미지 데이터를 함께 분석하기 위해 CVAE와 ANP를 결합한 이상 진단 모델 연구. 모델이 예측의 불확실성을 추정하고 XGBoost로 이상 상태를 분류하도록 구성. 실험에서는 비교 모델보다 높은 분류 정확도를 확인했으며, 현장 관리자가 진단 결과를 검토할 수 있는 방식의 활용 가능성을 제시.",summarySource:"ASK 2026 발표논문 「CVAE-ANP: 신뢰성 있는 산업 공정 이상 탐지 및 진단」의 요약을 바탕으로 정리",details:[['관련 연구','CVAE-ANP 산업 공정 이상 탐지 및 진단'],['담당 내용','모델 하이퍼파라미터 튜닝 및 실험 코드 구현'],['연구 참여','팀 연구 · 제2저자']]},
    {id:'economy-award',title:'제22회 한국경제신문 경제논문 공모전 장려상',short:'환경정책의 엄격성과 국가별 수출입의 관계를 분석한 경제논문',date:'2024.11.27',affiliation:'한국경제신문',links:[{label:'논문 원문 (PDF)',url:'papers/economic_policy_stringency_trade_paper.pdf'}],abstract:"환경정책이 엄격해질 때 국제무역에 어떤 변화가 나타나는지 확인하기 위해 27개국의 2004~2020년 자료를 분석. OECD 환경정책 엄격성 지수(EPS)와 연간 총무역액의 변화율을 비교하고, 경제성장률·환율·물가·연구개발 지출 등의 영향을 통제한 고정효과 패널회귀모형 적용. 분석 결과, EPS 상승과 무역액 증가율 사이에서 통계적으로 유의한 음(-)의 관계 확인(회귀계수 −0.02075, p=0.0147).",summarySource:"제22회 한국경제신문 경제논문 공모전 제출 원고의 「연구 요약 및 주요 발견」을 바탕으로 정리",details:[['연구 주제','환경정책의 엄격성과 국가별 수출입 규모의 관계'],['분석 방법','27개국의 2004~2020년 패널데이터 분석'],['담당 내용','연구 기획, 데이터 구성 및 통계 분석, 결과 해석, 본론 작성']]}
  ],
  certifications:[
    {id:'sqld',title:'SQL 개발자 (SQLD)',date:'2025.12',issuer:'한국데이터산업진흥원'},
    {id:'bigdata',title:'빅데이터분석기사',date:'2025.07',issuer:'한국데이터산업진흥원'},
    {id:'investment',title:'투자자산운용사',date:'2024.11',issuer:'금융투자협회'},
    {id:'adsp',title:'데이터분석 준전문가 (ADsP)',date:'2024.09',issuer:'한국데이터산업진흥원'}
  ],
  profile:{
    education:{school:'강원대학교 (춘천)',major:'행정학전공',doubleMajor:'경제학전공 (복수전공)',gpa:'3.91 / 4.5'},
    activities:[
      {name:'융합소프트웨어랩',period:'2024.03 — 2026.02',kind:'학술·연구 활동',items:['빅데이터·머신러닝 스터디','논문 작성 및 학술대회 참석']},
      {name:'강원대 투자학회',period:'2024.09 — 2026.02',kind:'동아리',items:['투자 관련 보고서 작성 및 발표']},
      {name:'경제학술동아리 YLC',period:'2023.09 — 2024.09',kind:'동아리',items:['경제 관련 강연 참석','경제 학술 발표','운영진 활동']}
    ]
  }
};
