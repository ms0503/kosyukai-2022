'use strict';

import Footer from '../components/Footer';
import Head from 'next/head';
import Navigation from '../components/Navigation';

export default function MinusOne(): JSX.Element {
    return (
        <>
            <Head>
                <title>-1. プロジェクト作成 - C++講習会2022</title>
            </Head>
            <div className="container">
                <nav className="nav">
                    <div className="nav-container">
                        <Navigation />
                    </div>
                </nav>
                <main className="contents">
                    <h1>C++講習会2022</h1>
                    <h2>プロジェクト作成</h2>
                    <section>
                        <h3>Visual Studio 2019のプロジェクト作成</h3>
                        <p>プロジェクト作成とソースファイルの作成方法について書いておきます。分からなくなったらこのページを開いてください。</p>
                        <section>
                            <h4>１．プロジェクト作成</h4>
                            <picture>
                                <source srcSet="image/start.webp" type="image/webp" />
                                <img src="image/start.png" width="574" alt="" />
                            </picture>
                            <p>Visual Studio 2019(以降VS)を立ち上げると最初に上のような画面が出てきます。この画面の右下の辺りにある「新しいプロジェクトの作成」(赤丸)をクリックしてください。</p>
                            <picture>
                                <source srcSet="image/select.webp" type="image/webp" />
                                <img src="image/select.png" width="574" alt="" />
                            </picture>
                            <p>すると上のようなウィンドウが出てきます。左上の赤丸から「Visual C++」、「空のプログラム」の順にクリックし、下の「名前」(緑枠)でプロジェクト名を決めて「OK」をクリックします。今回はtest_projectという名前にしました。</p>
                            <picture>
                                <source srcSet="image/project.webp" type="image/webp" />
                                <img src="image/project.png" width="574" alt="" />
                            </picture>
                            <p>これでプロジェクトの作成は完了です。次はソースファイルの追加についてです。</p>
                        </section>
                        <section>
                            <h4>２．ソースファイルの追加</h4>
                            <picture>
                                <source srcSet="image/add.webp" type="image/webp" />
                                <img src="image/add.png" width="574" alt="" />
                            </picture>
                            <p>
                                ソリューションエクスプローラーにある「ソースファイル」(青矢印)を右クリックし、「追加」から「新しい項目」をクリックします。
                                ソリューションエクスプローラーが出てこない場合は下の画像のように表示から「ソリューションエクスプローラー」をクリックして表示させてください。
                            </p>
                            <picture>
                                <source srcSet="image/solution.webp" type="image/webp" />
                                <img src="image/solution.png" width="574" alt="" />
                            </picture>
                            <picture>
                                <source srcSet="image/source.webp" type="image/webp" />
                                <img src="image/source.png" width="574" alt="" />
                            </picture>
                            <p>新しい項目をクリックすると上のようなウィンドウが出てきます。左上の赤丸から「Visual C++」・「C++ファイル」の順にクリックし、下の「名前」(緑枠)でソースファイル名を決めて「OK」をクリックします。今回はmain.cppという名前にしました。</p>
                            <picture>
                                <source srcSet="image/complete.webp" type="image/webp" />
                                <img src="image/complete.png" width="574" alt="" />
                            </picture>
                            <p>以上でソースファイルの作成は完了です。</p>
                        </section>
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
