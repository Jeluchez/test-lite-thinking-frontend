import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { Card } from 'components/card/card'

export const CompaniesScreen: React.FC = () => {
  return (
    <div className='company'>
      <header className='company__header'>
        <h1>crear compañia</h1>
        <p className='company__header-desc'>
          administre las compañias del inventario
        </p>

        <button className='header__btn-create'>
          <FontAwesomeIcon icon={faPlusCircle} className='btn__create-icon' />
          Crear
        </button>
      </header>

      <CompanyGrid />
    </div>
  )
}

const CompanyGrid: React.FC = () => {
  const length = 8
  const grid = Array.from({ length }, (_, index) => index + 1)

  const content = (
    <>
      <div>La mejor empresa Retail</div>
      <button>editar</button>
    </>
  )
  return (
    <div className='company__grid'>
      {grid.map((company, index) => (
        <Card title='Walmart' content={content} />
      ))}
    </div>
  )
}
