import { Box } from "@mui/material";
import { usePrograms } from "../api/programs.hooks";
import ProgramSection from "../components/ProgramSection";
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

      <ProgramSection
        title="Assigned Programs"
        programs={assigned}
        isLoading={isLoading}
      />

      <ProgramSection
        title="In Progress Programs"
        programs={inProgress}
        isLoading={isLoading}
      />

      <ProgramSection
        title="Completed Programs"
        programs={completed}
        isLoading={isLoading}
      />
    </Box>
  );
}
