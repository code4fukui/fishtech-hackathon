# fishtech-hackathon

このリポジトリには、**FISH TECH HACKATHON 2023**のプロジェクトに関するデータとWebビューア（チームの成果物や関連データセットなど）が含まれています。

## ライブデモ

- [ハッカソンチームプロジェクト](https://code4fukui.github.io/fishtech-hackathon/)
- [日本三大堆（漁場）](https://code4fukui.github.io/fishtech-hackathon/japanbanks.html)

## データ

- **[teams.csv](teams.csv)**: 全参加チームとプロジェクトの一覧。このファイルは `json2csv.js` から生成されます。
- **[japan_sea_banks.csv](japan_sea_banks.csv)**: 日本海における日本の三大堆（漁場）に関する地理空間データおよび説明データ。

### データの生成

`teams.csv` ファイルは、[Deno](https://deno.land/) を使用して `json2csv.js` スクリプトを実行することで再生成できます。

```bash
deno run --allow-write json2csv.js
```

## データソース

- [FISH×TECH HACKATHON](https://codefornoto.github.io/fishtechhackathon/)

## ライセンス

このプロジェクトは MIT License のもとで公開されています。
