$(document).ready(function() {
    $('.level-container').each(function() {
        const levelContainer = $(this); // Current level container
        const starsContainer = levelContainer.find('.stars-container');
        const continueButton = levelContainer.find('.continue button');
        const assetBefore = levelContainer.find('.asset-before');
        const assetAfter = levelContainer.find('.asset-after');
        const slots = levelContainer.find('.slot');
        const limbs = levelContainer.find('.limb');
        let correctPlacements = 0;

        limbs.draggable({
            revert: 'invalid',
            start: function(event, ui) {
                $(this).css('z-index', '10');
            },
            stop: function(event, ui) {
                $(this).css('z-index', '1');
            }
        });

        slots.droppable({
            tolerance: 'intersect',
            drop: function(event, ui) {
                const droppedLimb = ui.draggable;
                const limbNumber = droppedLimb.data('limb-number');
                const slotNumber = $(this).data('slot-number');

                if (limbNumber === slotNumber) {
                    correctPlacements++;
                    updateStars(starsContainer, 'images/star2.png');
                    
                    droppedLimb.position({ of: $(this), my: 'left top', at: 'left top' });
                    droppedLimb.draggable('disable');

                    checkCompletion();
                }
            }
        });

        function updateStars(container, imagePath) {
            const star = $('<img>').attr('src', imagePath).addClass('star');
            container.append(star);
        }

        function checkCompletion() {
            if (correctPlacements === limbs.length) {
                assetBefore.hide();
                slots.hide();
                limbs.hide();
                assetAfter.show();
                continueButton.show();
            }
        }

        continueButton.click(function() {
            const nextLevel = $(this).data('next-level');
            if (nextLevel) {
                window.location.href = nextLevel; // Navigate to the next level
            } else {
                console.log('No next level specified.');
            }
        });
    });
});