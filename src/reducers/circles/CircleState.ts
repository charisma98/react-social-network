import { Circle, UserTie } from 'core/domain/circles'

/**
 * Circle state
 *
 * @export
 * @class CircleState
 */
export class CircleState {
    /**
     * The list of users belong to users circle
     *
     * @memberof CircleState
     */
  userTies: {[userId: string]: UserTie }= {}

    /**
     * The list of users belong to users circle
     *
     * @memberof CircleState
     */
  userTieds: {[userId: string]: UserTie }= {}

  /**
   * The list of circle of current user
   */
  circleList: {[circleId: string]: Circle}

  /**
   * Whether select circle box is open for the selected user
   */
  selectCircleStatus: {[userId: string]: boolean}

  /**
   * Whether following loading is shown for the selected user
   */
  followingLoadingStatus: {[userId: string]: boolean}

    /**
     * If user circles are loaded {true} or not {false}
     *
     * @memberof CircleState
     */
  loaded: boolean = false
}
