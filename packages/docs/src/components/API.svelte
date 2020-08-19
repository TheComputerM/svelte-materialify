<script>
  import { Table } from 'svelte-materialify/src';

  export let doc;

  function getKeyword(obj, keyword, _default) {
    if (obj.keywords.length !== 0) {
      const output = obj.keywords.find((x) => x.name === keyword);
      if (output) return output.description;
    }
    return _default;
  }
</script>

<section>
  <h2 class="heading text-h4 mb-3" id="api">
    <a href="#api" tabindex="-1" aria-hidden="true">
      <i class="mdi mdi-pound" />
    </a>
    API
  </h2>
  <section>
    <h3 class="heading text-h5 mb-2" id="props">
      <a href="#props" tabindex="-1" aria-hidden="true">
        <i class="mdi mdi-pound" />
      </a>
      Props
    </h3>
    <Table style="border: thin solid var(--theme-dividers)">
      <thead>
        <tr>
          <th>Prop</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {#each doc.data as prop}
          {#if prop.visibility === 'public'}
            <tr>
              <td>
                <span class="font-weight-bold text-mono">{prop.name}</span>
                <span class="d-block text-caption text--secondary">
                  {prop.type.text}
                </span>
              </td>
              <td>
                <code>{prop.defaultValue}</code>
              </td>
              <td>{prop.description || 'Missing Description'}</td>
            </tr>
          {/if}
        {/each}
      </tbody>
    </Table>
  </section>

  {#if doc.events.length !== 0}
    <section>
      <h3 class="heading text-h5 mb-2" id="events">
        <a href="#events" tabindex="-1" aria-hidden="true">
          <i class="mdi mdi-pound" />
        </a>
        Events
      </h3>
      <Table style="border: thin solid var(--theme-dividers)">
        <thead>
          <tr>
            <th>Event</th>
            <th>Returns</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {#each doc.events as event}
            <tr>
              <td class="font-weight-bold text-mono">{event.name}</td>
              <td>{getKeyword(event, 'returns', 'DOMEvent')}</td>
              <td>{event.description || 'DOM Event'}</td>
            </tr>
          {/each}
        </tbody>
      </Table>
    </section>
  {/if}

  {#if doc.slots.length !== 0}
    <section>
      <h3 class="heading text-h5 mb-2" id="slots">
        <a href="#slots" tabindex="-1" aria-hidden="true">
          <i class="mdi mdi-pound" />
        </a>
        Slots
      </h3>
      <Table style="border: thin solid var(--theme-dividers)">
        <thead>
          <tr>
            <th>Slot</th>
            <th>Slot Props</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {#each doc.slots as slot}
            <tr>
              <td class="font-weight-bold text-mono">{slot.name}</td>
              <td>
                {#each slot.parameters as slotParam}
                  <code>{slotParam.name}</code>
                  ;
                {:else}None{/each}
              </td>
              <td>{slot.description || 'No Description'}</td>
            </tr>
          {/each}
        </tbody>
      </Table>
    </section>
  {/if}
</section>
