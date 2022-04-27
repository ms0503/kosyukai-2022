'use strict';

import Footer from '../components/Footer';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Script from 'next/script';

export default function Nine(): JSX.Element {
    return (
        <>
            <Head>
                <title>9. クラス - C++講習会2022</title>
            </Head>
            <div className="container">
                <Navigation />
                <main className="contents">
                    <h1>C++講習会2022</h1>
                    <h2>クラス</h2>
                    <section>
                        <h3>目標</h3>
                        <p>classを使えるようになる。</p>
                    </section>
                    <section>
                        <h3>語句説明</h3>
                        <section>
                            <h4>class</h4>
                            <p>新しい型を作るための構文。クラスって言います。</p>
                            <p>クラスには自由な名前の変数や関数を宣言することができます。</p>
                        </section>
                    </section>
                    <section>
                        <h3>サンプル</h3>
                        <code><Script src="https://gist.github.com/HinoAyase/dfb5e9cad23360862403d522f4f0c096.js"></Script></code>
                        <section>
                            <h4>解説</h4>
                            <section>
                                <h5>クラスの作り方</h5>
<pre><code>
class クラス名 &lbrace;
    public:
        プログラム内で使える変数、関数を宣言する。
        クラス名() &lbrace;
            変数の初期化をする。
        &rbrace;
    private:
        クラス内でしか使えない変数、関数を宣言する。
&rbrace;; ←セミコロンが必要。
</code></pre>
                            </section>
                        </section>
                    </section>
                    <section>
                        <h3>クラスの使い方</h3>
                        <section>
                            <h4>クラスを使った変数の宣言</h4>
<pre><code>
クラス名 変数名;
</code></pre>
                        </section>
                        <section>
                            <h4>変数、関数へのアクセス</h4>
                            <span>
                                宣言した変数名.publicに書いた変数名(e.g. <pre><code>normal_car.oil</code></pre>)
                                クラスを使って変数を宣言すると、あらかじめクラスに書いた変数を使うことができます。
                            </span>
                        </section>
                    </section>
                    <section>
                        <h3>publicとprivate</h3>
                        <p>publicに書いた変数や関数は宣言した変数でも使えます。</p>
                        <p>
                            それと違ってprivateに書いた変数や関数は、classの中身でしか使えません。
                            外部からのアクセスを防ぎ、関数などで不意に値を変更したくないときに役立ちます。
                        </p>
                    </section>
                    <section>
                        <h3>class内の変数の初期化</h3>
                        <span>
                            class内の変数は
<pre><code>
クラス名() &lbrace;
    変数 = 代入;
&rbrace;
</code></pre>
                            で初期化してください。これも通常の変数同様、<strong>必ず初期化をしてください。</strong>
                        </span>
                        <p>サンプルは車を模したクラスを作り、normal_carという車を宣言し、走らせています。</p>
                    </section>
                    <section>
                        <h3>課題</h3>
                        <ul>
                            <li>サンプルコードを実行して出力を確かめる。</li>
                        </ul>
                    </section>
                </main>
            </div>
            <Footer />
        </>
    );
}
