<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	// club is in Calgary, so all dates are shown in Calgary time
	const TZ = 'America/Edmonton';
	const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	/** "2026-10-01" style key for a date, in Calgary time */
	const dayKey = (date: Date) => date.toLocaleDateString('en-CA', { timeZone: TZ });

	// start on the current month
	const todayKey = dayKey(new Date());
	let year = $state(Number(todayKey.slice(0, 4)));
	let month = $state(Number(todayKey.slice(5, 7)) - 1); // 0 = January

	const monthLabel = $derived(
		new Date(Date.UTC(year, month, 1)).toLocaleDateString('en-CA', {
			month: 'long',
			year: 'numeric',
			timeZone: 'UTC'
		})
	);

	// blank cells before the 1st, then one cell per day
	const cells = $derived.by(() => {
		const firstWeekday = new Date(Date.UTC(year, month, 1)).getUTCDay();
		const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
		return [
			...Array(firstWeekday).fill(null),
			...Array.from({ length: daysInMonth }, (_, i) => i + 1)
		] as (number | null)[];
	});

	function eventsOn(day: number) {
		const key = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
		return data.events.filter((e) => dayKey(new Date(e.date)) === key);
	}

	const timeOf = (date: Date) =>
		new Date(date).toLocaleTimeString('en-CA', { timeZone: TZ, hour: 'numeric', minute: '2-digit' });

	function changeMonth(step: number) {
		const d = new Date(Date.UTC(year, month + step, 1));
		year = d.getUTCFullYear();
		month = d.getUTCMonth();
	}
</script>

<div class="page">

	<div class="calendar">
		<div class="calendar-header">
			<button onclick={() => changeMonth(-1)} aria-label="Previous month">‹</button>
			<h2>{monthLabel}</h2>
			<button onclick={() => changeMonth(1)} aria-label="Next month">›</button>
		</div>

		<div class="grid">
			{#each WEEKDAYS as weekday (weekday)}
				<div class="weekday">{weekday}</div>
			{/each}

			{#each cells as day, i (i)}
				<div class="cell" class:empty={day === null}>
					{#if day !== null}
						<span class="day">{day}</span>
						{#each eventsOn(day) as event (event.id)}
							<div class="event">
								<strong>{event.title}</strong>
								<span>{timeOf(event.date)}{#if event.location} · {event.location}{/if}</span>
							</div>
						{/each}
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.page {
		max-width: var(--content-max-width);
		margin: 0 auto;
		padding: 2rem var(--page-gutter);
	}

	.calendar {
		border: 1px solid var(--color-border);
		border-radius: var(--border-radius);
		background: var(--color-surface);
		padding: 1rem;
	}

	.calendar-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 1rem;
	}

	.calendar-header h2 {
		margin: 0;
		font-size: 1.1rem;
	}

	.calendar-header button {
		padding: 0.3rem 0.8rem;
		border: 1px solid var(--color-border);
		border-radius: 0.5rem;
		background: var(--color-background);
		color: var(--color-foreground);
		font-size: 1.1rem;
		cursor: pointer;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(7, minmax(0, 1fr));
		gap: 0.4rem;
	}

	.weekday {
		text-align: center;
		font-size: 0.8rem;
		color: var(--color-muted);
	}

	.cell {
		min-height: 5rem;
		padding: 0.4rem;
		border: 1px solid var(--color-border);
		border-radius: 0.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
		min-width: 0;
	}

	.cell.empty {
		border: none;
	}

	.day {
		font-size: 0.8rem;
		color: var(--color-muted);
	}

	.event {
		display: flex;
		flex-direction: column;
		padding: 0.3rem;
		border-radius: 0.4rem;
		background: var(--color-brand-700);
		color: white;
		font-size: 0.75rem;
		overflow: hidden;
	}

	.event span {
		opacity: 0.85;
	}
</style>