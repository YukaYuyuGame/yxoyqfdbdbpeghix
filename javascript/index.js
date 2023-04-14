function pageLoad() {
	// ページ共通
	document.title = GAME_TITLE;

	const headers = document.getElementsByClassName('header');
	for (const header of headers) {
		header.innerHTML = HEADER_HTML;
	}

	const footers = document.getElementsByClassName('footer');
	for (const footer of footers) {
		footer.innerHTML = FOOTER_HTML;
	}

	const elements = document.getElementsByClassName('game_title');

	for (const element of elements) {
		element.innerHTML = GAME_TITLE;
	}

	// ページごと
	const PAGE_NAME = window.location.href.split('/').pop();
	switch (PAGE_NAME) {
		// トップ
		case 'top.html':
			break;

		// 物語
		case 'story.html':
			break;

		//人物
		case 'character.html':
			break;

		// 質問
		case 'qa.html':
			break;

		// 情報
		case 'product.html':
			break;
	}
}

function GotoTop() {
	location.href = '../html/top.html';
}

window.onload = pageLoad;
