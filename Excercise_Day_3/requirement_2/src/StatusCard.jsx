import styled from 'styled-components'

const Card = styled.div`
  background-color: ${(props) => (props.type === 'success' ? 'green' : 'red')};
  color: white;
  padding: 16px;
  border-radius: 4px;
`

function StatusCard({ type }) {
  return <Card type={type}>{type === 'success' ? 'Success!' : 'Error!'}</Card>
}

export default StatusCard
