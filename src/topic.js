import topics from "./topics";

window.topics = topics;

/**
 * Show a random topic
 */
(function () {
    var topicNode = document.querySelector(".js-topic");
    var isAnimated = false;

    function getATopic() {
        var topicIndex = Math.round(Math.random() * (topics.length - 1));

        topicNode.classList.add("_is-animated");
        isAnimated = true;

        // Add the new words with animation
        setTimeout(function () {
            var words = topics[topicIndex].split(" ");
            var newHtml = "";

            words.forEach(function (word, i) {
                var style = "transition-delay: " + i / words.length / 4 + "s";
                newHtml +=
                    '<span class="mask"><span class="word" style="' +
                    style +
                    '">' +
                    word +
                    "</span></span><span> </span>";
            });

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
            getATopic();
        }
    });

    /**
     * Get the first random topic automatically when the page is ready
     */
    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(function () {
            getATopic();
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
