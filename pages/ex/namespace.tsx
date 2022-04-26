'use strict';

import Footer from '../../components/Footer';
import Head from 'next/head';
import Navigation from '../../components/Navigation';
import Script from 'next/script';

export default function ExNameSpace(): JSX.Element {
    return (
        <>
            <Head>
                <title>Ex. 名前空間 - C++講習会2022</title>
            </Head>
            <div className="container">
                <nav className="nav">
                    <div className="nav-container">
                        <Navigation />
                    </div>
                </nav>
                <main className="contents">
                    <h1>C++講習会2022</h1>
                    <h2>名前空間</h2>
                    <section>
                        <h3>名前空間(namespace)とは</h3>
                        <p>イメージ</p>
                        <picture>
                            <source srcSet="image/std.webp" type="image/webp" />
                            <img src="image/std.png" width={574} alt="" />
                        </picture>
                        <span>
                            皆さんが何気なく使っている&quot;std&quot;は名前空間の名称です。一般的にC++に標準搭載されているライブラリの構文は&quot;std&quot;の中に入っています。
                            名前空間の中に入っている構文は通常、構文の前に&quot;名前::&quot;を付けないといけません。(e.g. <pre><code>std::cout</code></pre>)
                        </span>
                    </section>
                    <section>
                        <h3>名前空間の作り方</h3>
                        <code><Script src="https://gist.github.com/HinoAyase/c0a199c1ce960a86cb03835b3891661d.js"></Script></code>
<pre><code>
namespace 名称 &lbrace;
    中に入れるものを書く。
&rbrace;
</code></pre>
                        <p>名前空間を使うことによって、その構文がどのような役割を持っているかまとめて区別することができます。</p>
                        <p>ちなみに名前空間を名前空間で囲うこともできます。</p>
                    </section>
                    <section>
                        <h3>using namespace std;</h3>
                        <p>
                            分からないときに検索するとよくこの構文が出てきます。この構文の役割は&quot;std&quot;という名前空間を区別しなくてよくなることです。
                            例えば、&quot;std::cout&quot;を&quot;cout&quot;だけで使えるようになります。
                        </p>
                        <p>
                            これを使う利点としてはコードを書く量が短くなるため、競技プログラミングなどでよく使用されます。
                            しかし、複数のライブラリを使う規模の大きい開発の場合には、多用しすぎることでコードが見づらくなってしまったり、
                            別の名前空間内にある同じ構文にてどのように動くか分からなくなってしまうことがあるので、なるべく使わないように心がけましょう。
                        </p>
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
