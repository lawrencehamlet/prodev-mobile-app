import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchGroup: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#fff",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#E9E9E9",
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 14,
    color: "#333",
  },
  searchControl: {
    fontSize: 12,
    color: "#999",
    marginTop: 4,
  },
  searchButton: {
    backgroundColor: "#34967C",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
  },
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 24,
    paddingVertical: 12,
  },
  filterContainer: {
    alignItems: "center",
    width: 60,
    height: 60,
  },
  listingContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  paginationContainer: {
    alignItems: "center",
    paddingVertical: 20,
    marginBottom: 20,
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 25,
  },
  showMoreButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export { styles };
