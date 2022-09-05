import React from 'react';
import StatusBar from "@components/StatusBar";
import {Wrapper,UserProfile,SideBar,RightSide} from "@pages/MyPage/styles";


const MyPage =()=>{
    return (
        <Wrapper>
            <StatusBar/>
            <SideBar>

            </SideBar>
            <RightSide>
                <UserProfile>
                    <img src="https://post-phinf.pstatic.net/MjAyMTAzMTNfODUg/MDAxNjE1NjAxNjIwOTQz.81Ruw-E3aK-7V89c5JacxvnbWFe8ez_6dGT3S3AC-g8g.ZcQgsuG13-tR16wrj6B32vOIi3axULarz9eoWwBjo2kg.PNG/%EC%B9%98%EC%BD%94%EB%A6%AC%ED%83%80_%EA%B3%B5%EC%8B%9D_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-downDFG.png?type=w1200" alt=""/>
                    <div>
                        <div>권오현</div>
                        <div>진짜 못생김</div>
                    </div>
                </UserProfile>
            </RightSide>


        </Wrapper>
    )
};
export default MyPage;