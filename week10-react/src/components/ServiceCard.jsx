function ServiceCard({ categoryLabel, title, description, detail }) {
  return (
    <article className="service-card">
      <p className="service-category">{categoryLabel}</p>
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="service-detail">{detail}</p>
    </article>
  )
}

export default ServiceCard
