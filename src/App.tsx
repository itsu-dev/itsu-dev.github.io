import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./components/card/Card";
import JVMonTSImg from "./assets/img/jvm_on_ts.png"
import ModernManabaImg from "./assets/img/modern_manaba.png"
import MigrationCheckerImg from "./assets/img/migration_checker.png"

function App() {
  return (
    <div className="app">
      <header className="App-header">
        <h1 className={"title"}>itsu.dev</h1>
          <Card title={"About"}>
              <p>
                  筑波大学 情報メディア創成学類2年のコンピュータに興味がある人間です。
                  総合学域群の第2類で入学し、2022年度に本学類に移行しました。最近は
                  JVMがアツい。
              </p>

              <h2>すき</h2>
              <p>Kotlin (Android / JVM / JS), TypeScript</p>

              <h2>使ったことがある</h2>
              <p>Java, Python, HTML, CSS, JavaScript, React.js, Vue.js, C</p>

              <h2>Links</h2>
              <p>

              </p>
          </Card>

          <h2 className={"tape"}>Portfolio</h2>

          <Card title={"JVM on TypeScript"}>
              <img src={JVMonTSImg} />
              <p>
                  研究目的で、TypeScriptを用いてJVMをフルスクラッチで実装しています。
                  できるだけJVMの仕様（JVM内部の初期化からリンク、クラスの初期化等）に沿って
                  "Hello, World!"の表示を行うことを目標としています。
              </p>

              <h2>GitHub</h2>
              <p>
                  <a href={"https://github.com/itsu-dev/jvm-on-typescript"}>https://github.com/itsu-dev/jvm-on-typescript</a>
              </p>

              <h2>使用技術</h2>
              <p>
                  TypeScript, Java
              </p>
          </Card>

          <Card title={"移行要件チェックツール"}>
              <img src={MigrationCheckerImg} />
              <p>
                  筑波大学 総合学域群の学生の時間割が移行要件を満たしているかがチェックできるWebアプリです。移行要件チェックツールの他に、履修の仮組み機能や移行要件一覧などの機能も実装しました。
              </p>

              <h2>移行要件チェックツール</h2>
              <p>
                  <a href={"https://boke.itsu.dev/scs-migration-checker/"}>https://boke.itsu.dev/scs-migration-checker/</a>
              </p>

              <h2>GitHub</h2>
              <p>
                  <a href={"https://github.com/itsu-dev/scs-migration-checker"}>https://github.com/itsu-dev/scs-migration-checker</a>
              </p>

              <h2>使用技術</h2>
              <p>
                  Kotlin/JS (Before rewriting),  React.js, TypeScript
              </p>
          </Card>

          <Card title={"modern-manaba"}>
              <img src={ModernManabaImg} />
              <p>
                  manaba、ださくね？の一言から始まった、<a href={"https://mimori256.github.io/"}>みもりくん</a>との共同プロジェクトです。
                  筑波大学向けのmanabaのUIを変更し、かつレスポンシブに対応させたChrome向けの拡張機能となっています。 ダークモードもあるよ。
              </p>

              <h2>Chrome ウェブストア</h2>
              <p>
                  <a href={"https://chrome.google.com/webstore/detail/modern-manaba/oimcohooopcpjnmdgijjicdhkifopbli?hl=ja"}>https://chrome.google.com/webstore/detail/modern-manaba/oimcohooopcpjnmdgijjicdhkifopbli?hl=ja</a>
              </p>

              <h2>GitHub</h2>
              <p>
                  <a href={"https://github.com/itsu-dev/modern-manaba"}>https://github.com/itsu-dev/modern-manaba</a>
              </p>

              <h2>使用技術</h2>
              <p>
                  HTML, CSS, JavaScript
              </p>
          </Card>

          <Card title={"MiRm (End of Service) "}>
              <p>
                  Minecraftのマルチプレイ用のレンタルサーバーを無料で貸与するWebサービス。 フロント・バックエンド・Androidアプリエンジニアとしてチームに加入し、インフラを除く部分を開発しました。3年ほど運営し、現在はサービス終了しています。
              </p>

              <h2>使用技術</h2>
              <p>
                  Kotlin (Spring Boot, Android), Python (Flask), JavaScript(jQuery), HTML, CSS, MySQL, Firebase Cloud Messaging
              </p>
          </Card>
      </header>
    </div>
  );
}

export default App;
