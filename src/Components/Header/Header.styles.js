import styled from 'styled-components';

export const Section = styled.header`
    background-color: var(--primary-orange);
    z-index: -2;
    max-width: 1240px;
    margin-bottom: 60px;
    position: relative;
    min-height: 500px; 
    display: flex;
    align-items: center;
    padding: 125px 0 250px 0;
    
    .flex-content{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .content{
        position: relative; 
        z-index: 4; 
        max-width: 410px;
        color: var(--primary-blue);
        align-content: center;

        span{
            color: var(--accent-orange);
            font-size: 38px;
            line-height: 44px;
        }
    }
`;

export const Background = styled.div`
    max-width: 1240px; 
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    z-index: -5;            

    img{
        width: 100%;
        height: auto;
        display: block;
    }
`;

export const ImageWrapper = styled.div`
    max-width: 600px;
    position: relative;

    img{
        width: 100%;
        height: auto;
        display: block;
        
    }

    .ellipse{
        position: absolute;
        top: -50px;
        right: -5px;
        max-width: 250px;
        

        img{
            z-index: 0;
        }
    }
`;