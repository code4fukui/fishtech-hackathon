import { CSV } from "https://js.sabae.cc/CSV.js";

const TEAM_DATA = [
  { id: 'team1', type: 'team', label: 'Team 01: 41h0(シホ)', title: 'FisBuzz', image: './images/1.png', pdfUrl: 'https://drive.google.com/file/d/11BEGQ2zwdsX3J2uUjaYVTLdIauA7Qweg/preview' },
  { id: 'team2', type: 'team', label: 'Team 02: WildCard', title: 'うみべのまち', image: './images/2.png', pdfUrl: 'https://drive.google.com/file/d/1HdHtog5m6cU0s-Psnj9PBFombsaXxDDp/preview' },
  { id: 'team3', type: 'team', label: 'Team 03: Dチーム', title: 'リモート勝手丼', image: './images/3.png', pdfUrl: 'https://drive.google.com/file/d/1whvdSrY4jvcqxQgVHWBRMuZ1ipFMNpeB/preview' },
  { id: 'team4', type: 'team', label: 'Team 04: TBD', title: '飲食店検索サイト AGISAI', image: './images/4.png', pdfUrl: 'https://drive.google.com/file/d/1t5IsPerl_ZuG_PJaasBbwyLrnDbDcy1N/preview' },
  { id: 'team5', type: 'team', label: 'Team 05: チーム金工大', title: '石川推し魚水族館', image: './images/5.png', pdfUrl: 'https://drive.google.com/file/d/1NZQJ7GY9AkC-IV7mZZAqS5YRwEaYJdro/preview' },
  { id: 'team6', type: 'team', label: 'Team 06: Team Null', title: 'ふるさとピンチ', image: './images/6.png', pdfUrl: 'https://drive.google.com/file/d/1hAPsDpR2rr6znl2dwyjjgQCLkSI0QAI8/preview' },
  { id: 'team7', type: 'team', label: 'Team 07: チームオーシャン', title: '漁情法', image: './images/7.png', pdfUrl: 'https://drive.google.com/file/d/1wBEWKRe6oK9e6GyKFW-O7pE-EXRYH2pF/preview' },
  { id: 'team8', type: 'team', label: 'Team 08: CRAB倶楽部', title: '輝に会えるのか', image: './images/8.png', pdfUrl: 'https://drive.google.com/file/d/1k9e2-rxWmgnmrZAzRx9HyokJBTCCvOfu/preview' },
  { id: 'team9', type: 'team', label: 'Team 09: Team_Sousei', title: 'ウオガイド・カナザワ', image: './images/9.png', pdfUrl: 'https://drive.google.com/file/d/1OffP5F1ximC3dZMy0rzGiKVUXNZJl3hI/preview' },
  { id: 'team10', type: 'team', label: 'Team 10: IshiWave', title: 'まいもんハンター', image: './images/10.png', pdfUrl: 'https://drive.google.com/file/d/1tesZSfDx9gm1XZ-u2HLItuK2eBFTYHZh/preview' },
  { id: 'team11', type: 'team', label: 'Team 11: チームなかや', title: '超AIコンシェルジュ!', image: './images/11.png', pdfUrl: 'https://drive.google.com/file/d/1sGnA3lkDvAyjxSBCFk_7DoJMjPEW60wt/preview' },
  { id: 'team12', type: 'team', label: 'Team 12: いわしくるくる', title: 'ぎょぎょろぐ', image: './images/12.png', pdfUrl: 'https://drive.google.com/file/d/1Oqtb_hSZ9O0oD4g9icZv148GaboAW2oC/preview' },
  { id: 'team13', type: 'team', label: 'Team 13: Chasoso', title: 'Nihonkai Tsu', image: './images/13.png', pdfUrl: 'https://drive.google.com/file/d/19MMchxu1lqgUKyWeMRlmOxtp6b-U2nci/preview' },
  { id: 'team14', type: 'team', label: 'Team 14: データドリブンLab', title: 'TORETATE', image: './images/14.png', pdfUrl: 'https://drive.google.com/file/d/1IVYf25Y6rdGMS9lY8wKb3kRK4d65Es2L/preview' },
  { id: 'team15', type: 'team', label: 'Team 15: AirData', title: 'SuiSanData', image: './images/15.png', pdfUrl: 'https://drive.google.com/file/d/1iN8SuA0-0oHbXMLY4BTfFusVxNYhW0NN/preview' },
  { id: 'team16', type: 'team', label: 'Team 16: （仮）', title: 'Ocean Copilot', image: './images/16.png', pdfUrl: 'https://drive.google.com/file/d/1vDYvfem8ahxR3hFLIBiT6BuZIlz6Fj6A/preview' },
  { id: 'team17', type: 'team', label: 'Team 17: 海洋のオーシャン', title: '金沢魚通ガイド', image: './images/17.png', pdfUrl: 'https://drive.google.com/file/d/14Z0qPuwB4Z7dnugV_8P-QiF3iDrJOnhm/preview' },
  { id: 'team18', type: 'team', label: 'Team 18: naminamina', title: '（アプリ名未定）', image: './images/18.png', pdfUrl: '' },
  { id: 'team19', type: 'team', label: 'Team 19: UoNow うおセブン', title: 'UoNow うおセブン', image: './images/19.png', pdfUrl: 'https://drive.google.com/file/d/1dnSFrpREV_7jaPX2uOw4Q4BX_EGNWrp_/preview' },
  { id: 'team20', type: 'team', label: 'Team 20: Shall we hack', title: '漁獲量一発で確認アプリ（仮）', image: './images/20.png', pdfUrl: 'https://drive.google.com/file/d/1fGvK5NiTKgnzsKWU10Z29YsDlRqn6D0P/preview' },
  { id: 'team21', type: 'team', label: 'Team 21: 寒いぜ石川', title: '漁業会社シミュレーションゲーム', image: './images/21.png', pdfUrl: 'https://drive.google.com/file/d/1xedWO0p1MY9tCTqVW072Eklbdw1vWS74/preview' },
  { id: 'team22', type: 'team', label: 'Team 22: 漁師コンピューティング', title: '漁師コンピューター', image: './images/22.png', pdfUrl: 'https://drive.google.com/file/d/1svSAPF08O_6CaFeqIum8c6Sls_gjk0cK/preview' },
  { id: 'team23', type: 'team', label: 'Team 23: 能登LSAデジタルラボ', title: 'UMINO WA', image: './images/23.png', pdfUrl: 'https://drive.google.com/file/d/1aep8FIY3DlzjhG-CnOXEAbLSdkas8ce9/preview' }
];

await Deno.writeTextFile("data.csv", CSV.stringify(TEAM_DATA));
