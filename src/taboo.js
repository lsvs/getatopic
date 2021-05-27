import taboos from "./taboos";

window.taboos = taboos;

/**
 * Show a random taboo
 */
(function () {
    var topicNode = document.querySelector(".js-topic");
    var isAnimated = false;

    function getATaboo() {
        var tabooIndex = Math.round(Math.random() * (taboos.length - 1));

        topicNode.classList.add("_is-animated");
        isAnimated = true;

        // Add the new words with animation
        setTimeout(function () {
            var card = taboos[tabooIndex];
            var newHtml =
                '<div class="card__word"><div class="mask"><span class="word">' +
                card.word +
                '</span></div></div><div class="card__list">';

            card.forbidden.forEach(function (word, i) {
                var style =
                    "transition-delay: " +
                    (i + 1) / card.forbidden.length / 4 +
                    "s";
                newHtml +=
                    '<div class="mask"><span class="word" style="' +
                    style +
                    '">' +
                    word +
                    "</span></div>";
            });

            newHtml += "</div>";

            topicNode.innerHTML = newHtml;

            setTimeout(function () {
                topicNode.classList.remove("_is-animated");
                isAnimated = false;
            }, 50);
        }, 500);
    }

    /**
     * Click anywhere to get a new topic
     */
    document.querySelector(".js-random").addEventListener("click", function () {
        if (!isAnimated) {
            getATaboo();
        }
    });

    /**
     * Get the first random topic automatically when the page is ready
     */
    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(function () {
            getATaboo();
        }, 800);
    });
})();

/**
 * Fix vh on mobile devices to prevent scroll
 */
(function () {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", vh + "px");

    window.addEventListener("resize", function () {
        var newVh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", newVh + "px");
    });
})();
