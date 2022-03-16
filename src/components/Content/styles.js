import styled from 'styled-components';

export const Container = styled.div`
    width: 82%;
    height: 100vh;
    background-color: #1f2229;
    color: #fff;
    
    h1{ 
        margin-left: 60px;
        margin-top: 30px;
        font-weight: bold;
        color: #bec4cc;
    }
`;

export const ContainerMovies = styled.div`
    width: 80%;
    max-width: 80%;
    height: auto;
    margin-left: 60px;
    margin-top: 40px;
`

export const WrapperList = styled.div`
    display: block;
    display: grid;
    grid-template-columns: repeat(4, 250px);  
    margin-bottom: 20px;  
    flex-wrap: wrap;
    width: 100%;
    
`
export const MovieItem = styled.div`
    width: 220px;
    height: 320px;
    border-radius: 10px;
    position: relative;
    bottom: 0;

    &:hover {
        top: -6px;
        transition: all .5s ease-in-out;
    }
    img{
        height: inherit;
        width: inherit;
        border-radius: 10px;
        opacity: 0.4;
    }
`
export const Infos = styled.div`
    position: absolute;
    display: flex;
    min-width: 100%;
    max-width: 100%;
    flex-direction: column;
    bottom: 10px;
    
    span {
        display: flex;
        margin-right: 10px;
        margin-left: 20px;
        align-items: center;
        
        svg { 
            margin-right: 5px;
        }
    }    
`

export const WrapperInfos  = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

`