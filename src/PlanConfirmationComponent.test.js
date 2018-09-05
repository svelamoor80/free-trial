import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
const props = {
    "match":
    {
        "path": "/plan/:plan",
        "url": "/Plan/29",
        "isExact": true,
        "params": { "plan": "29" }
    },
    "location": {
        "pathname": "/Plan/29",
        "myCustProps": {
            "title": "Entrepreneur",
            "planCharge": 29,
            "planSave": "$250",
            "selectPlanText": "Select Plan",
            "link": "/Plan",
            "switched": false
        },
        "search": "",
        "hash": "",
        "key": "wnq6x7"
    },
}
it('Toggles correctly', () => {
    const Plan = function (props) {
        return (
            `<div>
                <div class="planConfirmBody">
                    <div>'Thank you. You have selected Monthly plan of Entrepreneur at $29.'</div>
                    <a class='teikametricsRectangleBox' href='/'>
                        <span id='teikamtericsLabel'>Go Back</span>
                    </a>
                </div>
            </div>`
        )
    }

    const tree = renderer.create(<Plan />).toJSON();
    expect(tree).toMatchSnapshot();
});