'use strict';

import Footer from '../../components/Footer';
import Head from 'next/head';
import Navigation from '../../components/Navigation';
import Script from 'next/script';

export default function ExMultiDimArray(): JSX.Element {
    return (
        <>
            <Head>
                <title>Ex. 多次元配列 - C++講習会2022</title>
            </Head>
            <div className="container">
                <Navigation />
                <main className="contents">
                    <h1>C++講習会2022</h1>
                    <h2>多次元配列</h2>
                    <section>
                        <h3>多次元配列</h3>
                        <picture>
                            <source srcSet="image/double_array.webp" type="image/webp" />
                            <img src="image/double_array.png" width={574} alt="" />
                        </picture>
                        <p>上の図は3x3の2次元配列です。</p>
                    </section>
                    <section>
                        <h3>サンプル</h3>
                        <code><Script src="https://gist.github.com/HinoAyase/2966f411e1357519d7c4d8a2400a82e4.js"></Script></code>
                        <section>
                            <h4>解説</h4>
                            <p>arr1は宣言のみ、arr2は0で初期化。arr3は1から9までで初期化してます。</p>
                            <p>サンプルコードを出力するとarr3の中身が分かります。</p>
                        </section>
                    </section>
                </main>
            </div>
            <Footer />
        </>
    );
}
