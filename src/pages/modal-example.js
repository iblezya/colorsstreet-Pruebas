import React from "react"
import { Link } from "gatsby-plugin-modal-routing"
import { Layout } from "../components"

const ModalExamplePage = () => {
  return (
    <Layout>
      <h1>Hi people</h1>
      <p>
        <Link to="/pr">Go to page PR</Link>
      </p>
      <p>
        <Link to="/pr/" asModal>
          Page PR in Modal
        </Link>
      </p>

      <p>
        Eos ea veniam deleniti possimus tenetur itaque doloremque eveniet. Et
        voluptatibus velit voluptatem facere. Provident sint similique
        architecto consequuntur nulla ut rerum nesciunt.
      </p>

      <p>
        Nihil sint at sed tempora earum laudantium culpa et. Aperiam hic
        deleniti delectus fugit occaecati sunt aut dolore. Culpa labore aut non
        saepe rem sed ea doloribus. Cum ipsum quaerat repudiandae dicta quasi
        sint dicta aut.
      </p>

      <p>
        Quasi exercitationem consequatur magnam. Id inventore ipsam et nobis
        iure id eligendi. Molestias laborum voluptatem non quis beatae facilis.
        Ratione ut placeat ipsam ut sed repellendus.
      </p>

      <p>
        Sit error rerum est deleniti quos. Libero consequatur qui voluptatem
        excepturi nulla corporis. Totam occaecati laboriosam voluptate
        reiciendis id enim cum. Voluptatem aliquam impedit commodi minima sint
        rerum omnis. Totam ratione culpa soluta tempore dolores quibusdam.
      </p>

      <p>
        Est quia omnis delectus fuga inventore. Perferendis aut aperiam magni
        adipisci. Adipisci alias est natus omnis.
      </p>
    </Layout>
  )
}
export default ModalExamplePage
