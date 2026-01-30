import { StyleSheet, Dimensions } from "react-native";
import { colors } from "@/theme";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    // Container principal
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },

    // Header com título
    headerContainer: {
        paddingHorizontal: height * 0.02,
        paddingVertical: width * 0.04,
        backgroundColor: colors.blue[200],
    },

    title: {
        fontSize: 24,
        fontWeight: '700',
        color: colors.white,

    },

    // Botão de filtro
    filterButton: {
        width: width * 0.9,
        marginHorizontal: 20,
        marginVertical: 16,
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: colors.gray[950],
        borderTopEndRadius: 8,
        borderBottomEndRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: colors.blue[400],
        justifyContent: 'center',
        alignItems: 'flex-start',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 4,
        elevation: 2,
    },

    filterText: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.blue[400],
    },

    // Notificação Item
    notificationItem: {
        marginHorizontal: 16,
        marginVertical: 8,
        // borderRadius: 8,
        borderTopEndRadius: 8,
        borderBottomEndRadius: 8,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 3,
    },

    notificationItemUnread: {
        backgroundColor: colors.gray[50],
        borderLeftWidth: 4,
        borderLeftColor: colors.blue[400],
    },

    notificationItemRead: {
        backgroundColor: colors.backgroundAlt,
        borderLeftWidth: 4,
        borderLeftColor: colors.gray[800],
    },

    notificationContent: {
        padding: 16,
    },

    // Service name (título da notificação)
    serviceName: {
        fontSize: 16,
        fontWeight: '700',
        color: colors.black,
        marginBottom: 12,
        letterSpacing: 0.3,
    },

    // Info row (data, hora, doutor)
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },

    infoLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.blue[400],
        letterSpacing: 0.5,
        width: width * 0.15,
    },

    infoText: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.gray[250],
        flex: 1,
    },

    // Badge de status
    unreadBadge: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: colors.blue[400],
        position: 'absolute',
        right: 16,
        top: 16,
    },

    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 60,
        paddingHorizontal: 30,
    },

    emptyText: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.gray[900],
        textAlign: 'center',
        lineHeight: 24,
    },

    emptyIcon: {
        fontSize: 48,
        marginBottom: 16,
        color: colors.gray[150],
    },

    // FlatList container
    listContainer: {
        paddingTop: 8,
        paddingBottom: 24,
    },

    // Badge contador de não lidas
    unreadCounter: {
        marginTop: 3,
        alignItems: 'center',
        backgroundColor: colors.secondary,
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginLeft: 10,
    },

    unreadCounterText: {
        fontSize: 14,
        fontWeight: '700',
        color: colors.white,
    },

    // Separator
    separator: {
        height: 1,
        backgroundColor: colors.gray[250],
        marginHorizontal: 16,
        marginVertical: 8,
    },

    // Timestamp
    timestamp: {
        fontSize: 12,
        color: colors.gray[900],
        fontWeight: '500',
        marginTop: 12,
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: '#F0F0F0',
    },

    // Loading state
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40,
    },

    loadingSpinner: {
        width: 40,
        height: 40,
    },
});
