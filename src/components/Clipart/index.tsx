import ClothsRack from './ClothsRack';
import RubySlippers from './RubySlippers';

export default function Clipart() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <ClothsRack height={'25vh'} style={{ flex: 1 }} />

      <RubySlippers height={'25vh'} style={{ flex: 1 }} />
    </div>
  );
}
