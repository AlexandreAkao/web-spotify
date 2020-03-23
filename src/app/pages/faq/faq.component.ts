import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.css']
})
export class FaqComponent {

    openCloseAnswer(id: any) {

        const faqContainer = document.getElementById('faq-container').children;
        const containerClicked = faqContainer[id];
        const imgArrow = containerClicked.children[0].children[1];
        const divQuestion = containerClicked.children[1];

        if (divQuestion.className === 'none-container') {
            divQuestion.className = '';
            imgArrow['src'] = '../../../assets/img/arrow_down.svg';
        } else {
            divQuestion.className = 'none-container';
            imgArrow['src'] = '../../../assets/img/arrow_up.svg';

        }
    }
}
