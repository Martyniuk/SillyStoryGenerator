(function () {
    var customNameInput = document.querySelector('input'),
        generateCustomStoryBtn = document.getElementsByClassName('randomize')[0],
        story = document.querySelector('.story'),
        storyText = 'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:,' +
            ' they stared in horror for a few moments, then :insertz:. ' +
            'Bob saw the whole thing, but he was not surprised — ' +
            ':insertx: weighs 300 pounds, and it was a hot day.',
        insertX = ['Willy the Goblin', 'Big Daddy ', 'Father Christmas'],
        insertY = ['Disneyland', 'the soup kitchen', 'the White House'],
        insertZ = ['turned into a slug and crawled away', 'melted into a puddle on the sidewalk', 'spontaneously combusted'],
        weight = 0,
        temperature = 0;

    function randomValueFromArray(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    function result() {
        var newStory = storyText,
            xItem = randomValueFromArray(insertX),
            yItem = randomValueFromArray(insertY),
            zItem = randomValueFromArray(insertZ);

        newStory = newStory.replace(/:insertx:/g, xItem);
        newStory = newStory.replace(':inserty:', yItem);
        newStory = newStory.replace(':insertz:', zItem);

        if (customNameInput.value != '') {
            newStory = newStory.replace(/Bob/, customNameInput.value)
        }

        if (document.getElementById('uk').checked) {
            // pounds to stone st = lb / 14; lb = st * 14
            // fr = C * 1.8000 + 32 ; c = (fr - 32) / 1.8000

            weight = Math.round(300 / 14) + ' stone';
            temperature = Math.round((94 - 32) / 1.8) + ' centigrade';
            newStory = newStory.replace('94 farenheit', temperature);
            newStory = newStory.replace('300 pounds', weight);
        }
        story.textContent = newStory;
        story.style.visibility = 'visible';
    }

    generateCustomStoryBtn.addEventListener('click', result);
})();


