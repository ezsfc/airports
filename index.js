'use strict'

const airports = [
  { iata: 'CTS', name: '千歳', aliases: ['札幌'] },
  { iata: 'WKJ', name: '稚内' },
  { iata: 'RIS', name: '利尻'},
  { iata: 'MBE', name: 'オホーツク紋別' },
  { iata: 'MMB', name: '女満別' },
  { iata: 'AKJ', name: '旭川' },
  { iata: 'SHB', name: '根室中標津' },
  { iata: 'KUH', name: '釧路' },
  { iata: 'OBO', name: '帯広' },
  { iata: 'HKD', name: '函館' },
  { iata: 'AOJ', name: '青森' },
  { iata: 'ONJ', name: '大館能代' },
  { iata: 'AXT', name: '秋田' },
  { iata: 'SYO', name: '庄内' },
  { iata: 'SDJ', name: '仙台' },
  { iata: 'FKS', name: '福島' },
  { iata: 'HND', name: '羽田', groups: ['東京'] },
  { iata: 'NRT', name: '成田', groups: ['東京'] },
  { iata: 'HAC', name: '八丈島' },
  { iata: 'OIM', name: '大島' },
  { iata: 'KIJ', name: '新潟' },
  { iata: 'FSZ', name: '静岡' },
  { iata: 'NGO', name: '名古屋', aliases: ['中部'] },
  { iata: 'TOY', name: '富山' },
  { iata: 'KMQ', name: '小松' },
  { iata: 'NTQ', name: '能登' },
  { iata: 'ITM', name: '伊丹', groups: ['大阪'] },
  { iata: 'KIX', name: '関西', groups: ['大阪'] },
  { iata: 'UKB', name: '神戸', groups: ['大阪'] },
  { iata: 'OKJ', name: '岡山' },
  { iata: 'HIJ', name: '広島' },
  { iata: 'IWK', name: '岩国' },
  { iata: 'UBJ', name: '山口宇部' },
  { iata: 'TTJ', name: '鳥取' },
  { iata: 'YGJ', name: '米子' },
  { iata: 'IWJ', name: '萩・石見' },
  { iata: 'TAK', name: '高松' },
  { iata: 'TKS', name: '徳島' },
  { iata: 'MYJ', name: '松山' },
  { iata: 'KCZ', name: '高知' },
  { iata: 'FUK', name: '福岡' },
  { iata: 'KKJ', name: '北九州' },
  { iata: 'HSG', name: '佐賀' },
  { iata: 'OIT', name: '大分' },
  { iata: 'KMJ', name: '熊本' },
  { iata: 'NGS', name: '長崎' },
  { iata: 'TSJ', name: '対馬' },
  { iata: 'IKI', name: '壱岐' },
  { iata: 'FUJ', name: '五島福江' },
  { iata: 'KMI', name: '宮崎' },
  { iata: 'KOJ', name: '鹿児島' },
  { iata: 'OKA', name: '那覇', aliases: ['沖縄'] },
  { iata: 'MMY', name: '宮古' },
  { iata: 'ISG', name: '石垣' },
]

exports.filterByKeyword = keyword => {
  const matches = airports.filter(v => v.name === keyword)
  if (matches.length > 0) return matches

  const aliases = airports.filter(v =>
    Array.isArray(v.aliases) && v.aliases.includes(keyword))
  if (aliases.length > 0) return aliases

  return airports.filter(v =>
    Array.isArray(v.groups) && v.groups.includes(keyword))
}
