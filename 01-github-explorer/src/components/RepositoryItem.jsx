export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'bababuya'}</strong>
      <p>{props.repository?.description ?? 'Forms in react'}</p>

      <a href={props.repository?.link ?? ''}>Acessar repositório</a>
    </li>
  );
}
