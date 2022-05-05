var nodeCommentBtn = document.querySelector('.js-comment');
var nodeFeedbackBtn = document.querySelector('.js-feedback');
var nodeComment = document.querySelector('.input-comment');
var nodeFeedback = document.querySelector('.input-feedback');

console.log(nodeCommentBtn);

function showComment() {
    nodeCommentBtn.classList.remove('display');
    nodeFeedbackBtn.classList.add('display');

    nodeComment.classList.add('bb');
    nodeFeedback.classList.remove('bb');
};

function showFeedback() {
    nodeCommentBtn.classList.add('display');
    nodeFeedbackBtn.classList.remove('display');

    nodeComment.classList.remove('bb');
    nodeFeedback.classList.add('bb');
};   

/* ============================================ last changes */

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['12'],
        datasets: [{
            label: 'Price Evolution',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
/* ============================================ last changes */
