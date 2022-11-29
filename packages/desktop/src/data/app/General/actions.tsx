import ActionTypes from "../types";

const actions = {
  setSelected: (selectedPage: number) => ({ setState }: ActionTypes) => {
    setState({
      selectedPage
    });
  },

  setSelectedPlaylistId: (selectedPlaylistId: number) => ({ setState }: ActionTypes) => {
    setState({
      selectedPlaylistId
    })
  }
}

export default actions;