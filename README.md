<div style="width:100%;">
	<style>
        * {
            margin: 0;
            padding: 0;
            color: inherit;
            text-decoration: none;
            list-style: none;
            outline: none;
            box-sizing: border-box;
        }

        .body {
            --color-default-bg: #EEE;
            --color-reply-bg: #ddd;
            --color-title: #004A99;
            --color-primary: #333;
            --color-secondary: #5d5d5d;
            --color-link: #789922;
            --color-link-active: #f60;
            --color-icon: #8c8c8c;
            height: 600px;
            width: 100%;

            line-height: 1.3;
        }

        .container {
            background-color: var(--color-default-bg)
        }

        .link {
            color: var(--color-link)
        }

        .link__active {
            color: var(--color-link-active);
        }


        .op__detail {
            font-size: 0.9em;
            color: var(--color-secondary);
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .op__title h1 {
            font-size: 1.1em;
            color: var(--color-title);
            font-weight: 700;
        }

        .image{
            font-size: 70%;
        }

        .op__images {
            padding-left: 16px;
            display: flex;
            font-size: 0.8em;
            gap: 15px;
            color: var(--color-secondary);
        }


        .op__article {
            padding: 16px 36px;
        }

        footer {
            padding-left: 16px;
            padding-bottom: 6px;
            font-size: 70%;
        }

        footer span:nth-child(even) {
            margin-left: 5px;
        }

        .reply {
            position: relative;
            max-width: 28vw;
            background-color: var(--color-reply-bg);
            margin: 2px 0 4px 20px;
            border-radius: 3px;
        }

        .reply::before {
            content: '...';
            position: absolute;
            font-weight: 600;
            color: var(--color-icon);
            top: -5px;
            left: -16px;
        }

        .reply__detail {
            display: flex;
            gap: 6px;
            font-size: 0.9em;
                padding-left: 0.5rem;
            color: var(--color-secondary);
            align-items: center;
        }

        .reply__post {
            padding: 12px;
        }

        .reply__to {
            display: block;
            color: var(--color-link-active)
        }
    	</style>
            <div class='body'>
				<div class='container'>
					<section class="op">
						<div class="op__detail">
							<div class="op__title">
								<h1>Hello world #1</h1>
							</div>
							<div class="op__status">
								<span>Dev</span>
							</div>
							<div class="op__date">
								<span>30/09/23</span>
							</div>
							<div class="op__number">
								<span>№41795612</span>
								<span class="link">1</span>
							</div>
						</div>
						<div class="op__images">
							<figure class="image">
								<figcaption>
									<div class="link__active">
										<span>61878411374879.jpg</span>
									</div>
									<div class="image__descr">
										<span>176КБ</span>
										<span>466x777</span>
									</div>
								</figcaption>
								<img src="./img/1.webp" width="180" height="160" />
							</figure>
							<figure class="image">
								<figcaption>
									<div class="link__active">
										<span>61878411374879.jpg</span>
									</div>
									<div class="image__descr">
										<span>176КБ</span>
										<span>466x777</span>
									</div>
								</figcaption>
								<img src="./img/2.webp" width="180" height="160" />
							</figure>
							<figure class="image">
								<figcaption>
									<div class="link__active">
										<span>61878411374879.jpg</span>
									</div>
									<div class="image__descr">
										<span>176КБ</span>
										<span>466x777</span>
									</div>
								</figcaption>
								<img src="./img/3.webp" width="180" height="160" />
							</figure>
						</div>
						<article class="op__article">
							▲<br />▲ ▲
						</article>
						<footer class="link__active">
							<span>>>41795613</span><span>>>41795614</span>
						</footer>
					</section>
					<section class="reply">
						<div class="reply__detail">
							<span>Info</span>
							<span>30/09/23</span>
							<span>Sub</span>
							<span>20:41:39</span>
							<span>№41795613</span>
							<span class="link">2</span>
						</div>
						<article class="reply__post">
							<span class="reply__to">
								>>41795612
							</span>
							Stack: JS, TS, HTML/CSS, React,
							Vue.
						</article>
					</section>
					<section class="reply">
						<div class="reply__detail">
							<span>Info</span>
							<span>30/09/23</span>
							<span>Sub</span>
							<span>20:41:39</span>
							<span>№41795614</span>
							<span class="link">3</span>
						</div>
						<article class="reply__post">
							<span class="reply__to">
								>>41795612
							</span>
							<span>
								contact with me: <span class="link__active">yl29qtw6e@mozmail.com</span>
							</span>
						</article>
					</section>
				</div>
			</div>
</div>
