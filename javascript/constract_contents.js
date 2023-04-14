const GAME_TITLE = 'センノユカリ～追憶の双蝶、泡沫の想ひ～';

const HEADER_HTML = `
	<img id="logo" src="../resources/logo_test1_trim.png" onclick="GotoTop()" />
	<nav class="navigator">
		<ul>
			<li>
				<a href="./story.html">
					<img class="icon" src="../resources/background.png" />
					<p class="text">物語</p>
				</a>
			</li>
		<!--
			<li>
				<a href="./character.html">
					<img class="icon" src="../resources/background.png" />
					<p class="text">人物</p>
				</a>
			</li>
		-->
			<li>
				<a href="./qa.html">
					<img class="icon" src="../resources/background.png" />
					<p class="text">質問</p>
				</a>
			</li>
			<li>
				<a href="./product.html">
					<img class="icon" src="../resources/background.png" />
					<p class="text">情報</p>
				</a>
			</li>
		</ul>
	</nav>
`;

const FOOTER_HTML = `
	<p id="cautionText">
		このHP内にて掲載されている画像・文章などのデータの全ての権利は『<span class="game_title"></span>』製作委員会にあります。<br />
		無断で使用・転載する行為、AIへの機械学習やディープラーニング等の行為は禁止です。<br />
		<br />
		本ゲームは東方Projectの二次創作作品です。原作者様及び上海アリス幻樂団様とは一切関係ありません。<br />
		<br />
		©️ 2022-2023 『<span class="game_title"></span>』製作委員会
	</p>
`;
