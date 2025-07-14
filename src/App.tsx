import React, { useEffect, useState } from "react"
import { Card, Col, Layout, Modal, Row, Spin, Typography } from "antd"
import api from "./api"
import type { Article } from "./types"

const { Header, Content } = Layout
const { Meta } = Card

const App: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true)
      try {
        const response = await api.get("/top-headlines", {
          params: {
            country: "us",
            pageSize: 12,
          },
        })
        setArticles(response.data.articles)
      } catch (err) {
        console.error("Gagal fetch data:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  return (
    <Layout>
      <Header style={{ color: "#fff", fontSize: "24px" }}>
        Artikel berita
      </Header>
      <Content style={{ padding: "2rem" }}>
        {loading ? (
          <Spin tip="Loading..." />
        ) : (
          <Row gutter={[16, 16]}>
            {articles.map((article, index) => (
              <Col span={8} key={index}>
                <Card
                  hoverable
                  cover={
                    article.urlToImage && (
                      <img alt={article.title} src={article.urlToImage} />
                    )
                  }
                  onClick={() => setSelectedArticle(article)}
                >
                  <Meta
                    title={article.title}
                    description={article.source.name}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        )}
        <Modal
          open={!!selectedArticle}
          title={selectedArticle?.title}
          onCancel={() => setSelectedArticle(null)}
          footer={null}
        >
          <Typography.Paragraph>
            <strong>Author:</strong> {selectedArticle?.author || "Tidak diketahui"}
          </Typography.Paragraph>
          <Typography.Paragraph>
            {selectedArticle?.description}
          </Typography.Paragraph>
          <a
            href={selectedArticle?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Baca Selengkapnya →
          </a>
        </Modal>
      </Content>
    </Layout>
  )
}

export default App
