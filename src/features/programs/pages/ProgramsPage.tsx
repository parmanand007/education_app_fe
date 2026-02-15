import { Box } from "@mui/material";
import { usePrograms } from "../api/programs.hooks";
import ProgramSection from "../components/ProgramSection";
import EmptyState from "../components/EmptyState";
import PageHeader from "../../../shared/components/PageHeader";

export default function ProgramsPage() {
  const { data, isLoading } = usePrograms();

  const programs = data?.results ?? [];

  const assigned = programs.filter((p) => p.status === 1);
  const inProgress = programs.filter((p) => p.status === 0);
  const completed = programs.filter((p) => p.status === 2);

  return (
    <Box
      sx={{
        px: 5,
        py: 4,
        maxWidth: 1400,
      }}
    >
      <PageHeader
        title="My Programs"
        breadcrumb={[
          { label: "Dashboard", to: "/" },
          { label: "My Programs" },
        ]}
      />

      <ProgramSection title="Assigned Programs" programs={assigned} />

      <ProgramSection title="In Progress Programs" programs={inProgress} />

      {completed.length > 0 ? (
        <ProgramSection title="Completed Programs" programs={completed} />
      ) : (
        <Box sx={{ mt: 6 }}>
          <ProgramSection title="Completed Programs" programs={[]} />
          <EmptyState />
        </Box>
      )}
    </Box>
  );
}
