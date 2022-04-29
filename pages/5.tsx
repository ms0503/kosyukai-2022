'use strict';

import Footer from '../components/Footer';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Script from 'next/script';

export default function Five(): JSX.Element {
    return (
        <>
            <Head>
                <title>5. 分岐 - C++講習会2022</title>
            </Head>
            <div className="container">
                <Navigation />
                <main className="contents">
                    <h1>C++講習会2022</h1>
                    <h2>分岐</h2>
                    <section>
                        <h3>目標</h3>
                        <p>条件によって行う処理を変更することができる。</p>
                    </section>
                    <section>
                        <h3>語句説明</h3>
                        <section>
                            <h4>条件式</h4>
                            <p>結果がtrueかfalseになる式のこと。条件式の条件が満たされているときtrueになる、満たされていないときfalseになる。</p>
                        </section>
                        <section>
                            <h4>true/false</h4>
                            <p>trueは真、falseは偽を表す。</p>
                        </section>
                    </section>
                    <section>
                        <h3>サンプル１</h3>
                        <code><Script src="https://gist.github.com/HinoAyase/a11cfdb2cf45a7e4b3a168ddd3d19423.js"></Script></code>
                        <section>
                            <h4>解説</h4>
                            <section>
                                <h5>条件式の中身</h5>
                                <span>
                                    条件式には、
                                    <table>
                                        <tr><td>a == b</td><td>aとbが同じ</td></tr>
                                        <tr><td>a != b</td><td>aとbが異なる</td></tr>
                                        <tr><td>a &lt; b</td><td>aがb未満</td></tr>
                                        <tr><td>a &gt; b</td><td>bがa未満</td></tr>
                                        <tr><td>a &lt;= b</td><td>bがa以上</td></tr>
                                        <tr><td>a &gt;= b</td><td>aがb以上</td></tr>
                                        <tr><td>a &amp;&amp; b</td><td>a且つb</td></tr>
                                        <tr><td>a || b</td><td>aまたはb</td></tr>
                                    </table>
                                    といったものがあります。(最後の二つを論理演算子、他を比較演算子と言います。)
                                </span>
                            </section>
                            <section>
                                <h5>if文</h5>
                                <p>if文は、&lbrace;&rbrace;の中にある処理を条件式がtrueの場合実行します。</p>
<pre><code>
if(条件式) &lbrace;
    処理
&rbrace;
</code></pre>
                            </section>
                            <section>
                                <h5>else if文</h5>
                                <p>else if文は、&lbrace;&rbrace;の中にある処理をそれより上にあるif文・else if文の条件式を満たさず、且つ条件式がtrueの場合実行します。必ずif文と組み合わせて使います。</p>
<pre><code>
if(条件式) &lbrace;
    処理
&rbrace;
else if(条件式) &lbrace;
    処理
&rbrace;
</code></pre>
                            </section>
                            <section>
                                <h5>else文</h5>
                                <p>else文は、&lbrace;&rbrace;の中にある処理をそれより上にあるif文・else if文の条件式をいずれも満たさなかった場合実行します。必ずif文と組み合わせて使います。</p>
<pre><code>
if(条件式) &lbrace;
    処理
&rbrace;
else &lbrace;
    処理
&rbrace;
</code></pre>
                            </section>
                            <section>
                                <h5>switch-case文</h5>
                                <p>switch-case文はswitch文の変数と、case文の後にある値が同じであればcase節を実行します。default文はcase文の条件に1つも当てはまらないときにdefault節を実行します。</p>
<pre><code>
switch(変数) &lbrace;
    case 値:
        処理
        break;
    default:
        処理
        break;
&rbrace;
</code></pre>
                            </section>
                            <section>
                                <h5>break文</h5>
                                <p>while文やfor文、switch文などの中でこの文が実行されると&lbrace;&rbrace;を1つ抜けます。これより下の&lbrace;&rbrace;の文は無視されます。</p>
                            </section>
                        </section>
                    </section>
                    <section>
                        <h3>サンプル２</h3>
                        <code><Script src="https://gist.github.com/HinoAyase/4e1fd2627f0239d29659fa18footer-contents24ed86.js"></Script></code>
                        <section>
                            <h4>解説</h4>
                            <section>
                                <h5>条件式がbool型の場合</h5>
                                <span>もし<pre><code>a == true</code></pre>という条件式を書きたい場合trueの場合、<pre><code> == true</code></pre>を省略することができます。</span>
                            </section>
                        </section>
                    </section>
                    <section>
                        <h3>課題</h3>
                        <ul>
                            <li>サンプルコードを実行して出力を確かめる。</li>
                            <li><strong>要提出</strong> 簡単な電卓を作りましょう。2つの整数のみで構わないので標準入力より読み取って四則演算ができるようにしましょう。少数で表示してもいいですし、商と余りを出力しても大丈夫です。</li>
                        </ul>
                    </section>
                </main>
            </div>
            <Footer />
        </>
    );
}
