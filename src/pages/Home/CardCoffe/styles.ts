import styled from 'styled-components'

export const ListaCoffe = styled.div`
  display: flex;
  gap: 2rem;
  margin-top:3.375rem ;
  flex-wrap: wrap;
`

export const CardCointainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};

  border-radius: 6px 36px;
  width: 16.563rem;
  height: 19.375rem;
  padding: 0 20px 20px;

  display: flex;
  align-items: center;
  flex-direction: column;
  img{
    margin-top: -20px;
  }
`
export const Cardinfo = styled.div`
  display: flex;
  flex-direction: column;
`


export const CardTags = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 0.75rem ;
  gap: 0.25rem;
`

export const CardTag = styled.p`
  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 100px;
  padding: 0.25rem 0.5rem;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 0.625rem;
  color: ${(props) => props.theme['yellow-dark']};
  text-transform: uppercase;
`
export const CardTitle = styled.p`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  text-align: center;
  margin-top: 1rem;
  
`
export const CardDescription = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  text-align: center;

  margin-top: 0.5rem;
`

export const CardPrice = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 2.063rem;
  div{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  div:nth-child(1){
    span:first-child{
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;

      padding-top: 5px;
      margin-right: 2px;
    }
    p{
      font-weight: 800;
      font-size: 1.5rem;
      padding-bottom: 0;
      
    }
  }
`
export const Cardfunction = styled.div`
  display: flex;
  gap: 0.5rem;
  div:nth-child(1){
    background-color: ${(props) => props.theme['base-button']};
    gap: 0.25rem;
    border-radius: 0.375rem;
    padding:0.531rem 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    button{
      display: flex;
      align-items: center;

      border: 0;
      margin: 0;
      background-color: transparent;
      color: ${(props) => props.theme['purple']};
    }
    span{
      font-family: 'Roboto';
      font-style: normal;
      font-size: 1rem;
      font-weight: 400;
      line-height: 130%;
     
    }
  }
`
export const CardCart = styled.button`
  border: 0;
  background-color: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['white']};
  padding: 0.5rem;
  border-radius:0.375rem ;

  display: flex;
  align-items: center;
  justify-content: center;

`