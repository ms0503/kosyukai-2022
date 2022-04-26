'use strict';

import Footer from '../components/Footer';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Script from 'next/script';

export default function Six(): JSX.Element {
    return (
        <>
            <Head>
                <title>6. 繰り返し - C++講習会2022</title>
            </Head>
            <div className="container">
                <nav className="nav">
                    <div className="nav-container">
                        <Navigation />
                    </div>
                </nav>
                <main className="contents">
                    <h1>C++講習会2022</h1>
                    <h2>繰り返し</h2>
                    <section>
                        <h3>目標</h3>
                        <p>同じ処理を決めた回数繰り返すことができるようになる。</p>
                    </section>
                    <section>
                        <h3>語句説明</h3>
                        <section>
                            <h4>カウンター</h4>
                            <p>
                                任意の回数繰り返すとき、何回繰り返したか保存しておくため使われる。
                                慣習的に、カウンターの変数名はi以降の1文字の小文字アルファベットになることが多い。
                            </p>
                        </section>
                    </section>
                    <section>
                        <h3>サンプル１</h3>
                        <code><Script src="https://gist.github.com/HinoAyase/45aecc4d7a371138fff263f46c936b86.js"></Script></code>
                        <section>
                            <h4>解説</h4>
                            <section>
                                <h5>for(;;)</h5>
                                <p>for文は、&lbrace;&rbrace;の中にある処理を繰り返す文です。</p>
<pre><code>
for(変数の宣言初期化; 条件式; 変数の変化) &lbrace;
    処理
&rbrace;
</code></pre>
                                <p>変数の宣言では、繰り返すときのカウンターにする変数を宣言します。</p>
                                <p>for文は、指定した条件式がtrueの間繰り返されます。</p>
                                <p>変数の変化は主にカウンターを増加、減少させるときに使います。</p>
<pre><code>
for(int i = 0; i &lt; 5; i++) &lbrace; // iが1ずつ増加していく。
    // このなかで繰り返したい処理を行う。
&rbrace;
</code></pre>
                            </section>
                            <section>
                                <h5>中身</h5>
                                <span>
<pre><code>
std::cout &lt;&lt; "Hello_World!!  " &lt;&lt; 1 &lt;&lt; std::endl;
</code></pre>
                                    から
<pre><code>
std::cout &lt;&lt; "Hello_World!!  " &lt;&lt; 5 &lt;&lt; std::endl;
</code></pre>
                                    までと、
<pre><code>
for(int i = 1; i &lt; 6; i++) &lbrace;
    std::cout &lt;&lt; "Hello_World!!  " &lt;&lt; i &lt;&lt; std::endl;
&rbrace;
</code></pre>
                                    の意味は全く変わらない。
                                </span>
                            </section>
                        </section>
                    </section>
                    <section>
                        <h3>サンプル２</h3>
                        <code><Script src="https://gist.github.com/HinoAyase/b1a543491d429fee0c1baf2cc258684b.js"></Script></code>
                        <section>
                            <h4>解説</h4>
                            <section>
                                <h5>while()</h5>
                                <p>while文は、&lbrace;&rbrace;の中にある処理を繰り返す文です。</p>
<pre><code>
while(条件式) &lbrace;
    処理
&rbrace;
</code></pre>
                                <p>
                                    whileは、指定した条件式がtrueの間繰り返されます。
                                    主に何回繰り返すか分からない処理に使われます。
                                </p>
                            </section>
                            <section>
                                <h5>中身</h5>
<pre><code>
while(input != 0) &lbrace; // inputが0以外のときtrue。
    // このなかで繰り返したい処理を行う。
&rbrace;
</code></pre>
                                <p>入力が0でない間、入力された数字を加算することを繰り返します。</p>
                            </section>
                        </section>
                    </section>
                    <section>
                        <h3>課題</h3>
                        <ul>
                            <li>1から50000までの和を出力する。</li>
                            <li>
                                <strong>要提出</strong> while文を使い数字当てゲームを作る。数字を当てるまで繰り返す。
                                入力された数ではなかった場合その数より上か下か教える。
                            </li>
                            <li><strong>要提出</strong> <a href="https://gist.github.com/HinoAyase/7990db9b76334ddb2bc55338b0bfb917">九九列挙(クリックで説明を表示)</a></li>
                        </ul>
                    </section>
                </main>
            </div>
            <footer className="footer">
                <div className="footer-contents">
                    <Footer />
                </div>
            </footer>
        </>
    );
}
