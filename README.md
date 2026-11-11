# 개인 포트폴리오

개인 프로젝트, 학술 연구, 자격증 및 수상을 정리한 GitHub Pages 웹사이트입니다.

- **웹사이트:** https://choe-useong.github.io/portfolio/
- **대표 프로젝트:** 퀀트 리서치·자동매매 시스템, DART 재무데이터 기반 팩터투자 프레임워크
- **퀀트 성과 요약:** 국내 주식·미국 ETF·BTC 현물·알트코인 선물의 4개 숫자 카드. 상세 보고서에서 전략 명세, 성과 그래프, 검증 결과를 확인할 수 있습니다.
- **검증 지표:** 전체 기간 고정 전략 백테스트와 Walk-Forward Rolling·Expanding OOS 성과를 각각 제시합니다. 선물 롱·숏은 사후 선정된 72개 조합 중 최상위 사례이며 Walk-Forward 결과가 아닙니다.
- **기타 항목:** 연구·논문, 자격증 및 수상, 학력·활동

## 데이터와 화면 구성

- `data.js`: 프로젝트 및 연구 설명, 공개 성과 수치와 링크
- `app.js`: 페이지 탐색, 4개 전략 숫자 카드와 상세 보고서 표시
- `styles.css`: 화면 스타일과 반응형 레이아웃
- `assets/`: 4개 백테스트 그래프와 기타 공개 이미지. 퀀트 시스템 아키텍처 이미지는 공개 GitHub 저장소의 파일을 불러옵니다.

## 성과 기준과 출처

전략 성과는 **각 전략의 과거 백테스트 사례**이며 자동매매 시스템 전체 또는 실제 계좌의 운용 성과를 의미하지 않습니다. 전체 기간 백테스트와 Walk-Forward OOS는 평가기간과 산출 방식이 다를 수 있습니다. 특히 국내 주식의 전체 기간 CAGR은 일봉 연 252개 수익률 관측치 기준으로 연환산하므로 시작일·종료일만으로 계산한 달력일 CAGR과 달라질 수 있습니다.

공개 원본: [퀀트 시스템 전략별 상세 보고서](https://github.com/Choe-Useong/quant-trading-system/blob/main/notes/strategy_examples.md) · [요약 보고서](https://github.com/Choe-Useong/quant-trading-system/blob/main/notes/strategy_summary.md)

이 사이트에는 계좌 정보, 원천 데이터, 실제 운용 설정 및 주문·체결 내역을 포함하지 않습니다.
