import React from 'react';
import { Container } from 'reactstrap';
import './CustomerList.css';

const CustomerList = () => {
    return (
        <div>
            <div className="growingListContainer">
                <div id="meetCustLabel">MEET OUR CUSTOMERS</div>
                <div id="growingListLabel">A few of our growing list of successful Amazon sellers</div>
                <div className="divider custListDividerColor"></div>
            </div>
            <Container>
                <table>
                    <tbody className='logoGallery'>
                        <tr>
                            <td><img src='./assets/Company PNGs/techarmor.png' alt='TechArmor img' /></td>
                            <td><img src='./assets/Company PNGs/markcubancompanies.png' alt='marccuban companies ig' /></td>
                            <td><img src='./assets/Company PNGs/greengobbler.png' alt='green gobbler img' /></td>
                            <td><img src='/assets/Company PNGs/kissmyketo.png' alt='kissmyketo img' /></td>
                        </tr>
                        <tr>
                            <td><img src='./assets/Company PNGs/hyperikon.png' alt='hyperikon img' /></td>
                            <td><img src='./assets/Company PNGs/tipsyelves.png' alt='tipsyelves img' /></td>
                            <td><img src='./assets/Company PNGs/nutpods.png' alt='nutpods img' /></td>
                            <td><img src='/assets/Company PNGs/marathonsports.png' alt='marathon sports img' /></td>
                        </tr>
                        <tr>
                            <td><img src='./assets/Company PNGs/powerpractical.png' alt='power practical img' /></td>
                            <td><img src='./assets/Company PNGs/elizabethmott.png' alt='elizabethmott img' /></td>
                            <td><img src='./assets/Company PNGs/pavoi.png' alt='pavoi img' /></td>
                            <td><img src='/assets/Company PNGs/thursdayboots.png' alt='thursdayboots img' /></td>
                        </tr>
                    </tbody>
                </table>
            </Container>
        </div>
    )
}

export {
    CustomerList
}