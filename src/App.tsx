import { CloudArrowUp, Plus } from '@phosphor-icons/react'
import photo from './assets/photo.png'
import ToggleSwitch from './components/Switch.tsx'

function App() {
  return (
    <>
      <div className="flex h-screen gap-10 bg-[#1B1D28] p-20">
        <div className="flex h-[439px] w-[310px] flex-col gap-6 rounded-xl bg-[#222533] p-8 font-roboto">
          <div className="flex items-center gap-4">
            <img src={photo} alt="Photo of a person" />

            <div>
              <h2 className="text-lg text-[#E5E5E5]">Tammy Park</h2>
              <p className="text-base text-[#7D8193]">@tamp</p>
            </div>
          </div>

          <button className="flex w-full items-center justify-center gap-1 rounded-md bg-[#1A1C29] py-4 text-base text-[#E5E5E5] hover:bg-[#e5e5e5] hover:text-[#1A1C29]">
            <Plus /> Add profile
          </button>

          <div>
            <ul className="flex flex-col gap-5">
              <li className="flex items-center gap-3 text-[#E5E5E5]">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2_30)">
                    <path
                      d="M4.33333 21.6667H8.66666L20.0417 10.2917C20.6163 9.71703 20.9391 8.93766 20.9391 8.125C20.9391 7.31234 20.6163 6.53297 20.0417 5.95833C19.467 5.3837 18.6877 5.06087 17.875 5.06087C17.0623 5.06087 16.283 5.3837 15.7083 5.95833L4.33333 17.3333V21.6667Z"
                      stroke="#E5E5E5"
                      strokeWidth="1.625"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.625 7.04166L18.9583 11.375"
                      stroke="#E5E5E5"
                      strokeWidth="1.625"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_30">
                      <rect width="26" height="26" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Edit profile
              </li>
              <li className="flex items-center gap-3 text-[#E5E5E5]">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2_67)">
                    <path
                      d="M11.1854 4.67675C11.6469 2.77442 14.3531 2.77442 14.8146 4.67675C14.8838 4.96253 15.0196 5.22793 15.2108 5.45133C15.402 5.67474 15.6432 5.84984 15.9149 5.96239C16.1865 6.07494 16.4809 6.12176 16.7741 6.09902C17.0673 6.07629 17.3509 5.98466 17.602 5.83158C19.2736 4.81325 21.1878 6.72642 20.1695 8.39908C20.0166 8.65004 19.9252 8.93353 19.9025 9.2265C19.8798 9.51948 19.9266 9.81367 20.039 10.0852C20.1514 10.3567 20.3263 10.5978 20.5495 10.789C20.7726 10.9802 21.0377 11.116 21.3233 11.1854C23.2256 11.6469 23.2256 14.3531 21.3233 14.8146C21.0375 14.8838 20.7721 15.0196 20.5487 15.2108C20.3253 15.402 20.1502 15.6432 20.0376 15.9149C19.9251 16.1865 19.8782 16.4809 19.901 16.7741C19.9237 17.0673 20.0153 17.3509 20.1684 17.602C21.1868 19.2736 19.2736 21.1878 17.6009 20.1695C17.35 20.0166 17.0665 19.9252 16.7735 19.9025C16.4805 19.8798 16.1863 19.9266 15.9148 20.039C15.6433 20.1514 15.4022 20.3263 15.211 20.5495C15.0198 20.7726 14.884 21.0377 14.8146 21.3233C14.3531 23.2256 11.6469 23.2256 11.1854 21.3233C11.1162 21.0375 10.9804 20.7721 10.7892 20.5487C10.598 20.3253 10.3568 20.1502 10.0851 20.0376C9.81347 19.9251 9.51907 19.8782 9.2259 19.901C8.93273 19.9237 8.64907 20.0153 8.398 20.1684C6.72642 21.1868 4.81217 19.2736 5.8305 17.6009C5.98336 17.35 6.07485 17.0665 6.09752 16.7735C6.1202 16.4805 6.07343 16.1863 5.96101 15.9148C5.84859 15.6433 5.6737 15.4022 5.45055 15.211C5.22739 15.0198 4.96228 14.884 4.67675 14.8146C2.77442 14.3531 2.77442 11.6469 4.67675 11.1854C4.96253 11.1162 5.22793 10.9804 5.45133 10.7892C5.67474 10.598 5.84984 10.3568 5.96239 10.0851C6.07494 9.81347 6.12176 9.51907 6.09902 9.2259C6.07629 8.93273 5.98466 8.64907 5.83158 8.398C4.81325 6.72642 6.72642 4.81217 8.39908 5.8305C9.48242 6.48917 10.8864 5.90633 11.1854 4.67675Z"
                      stroke="#DADADA"
                      strokeWidth="1.625"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13 16.25C14.7949 16.25 16.25 14.7949 16.25 13C16.25 11.2051 14.7949 9.75 13 9.75C11.2051 9.75 9.75 11.2051 9.75 13C9.75 14.7949 11.2051 16.25 13 16.25Z"
                      stroke="#DADADA"
                      strokeWidth="1.625"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_67">
                      <rect width="26" height="26" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                App settings
              </li>
              <li className="flex items-center gap-3 text-[#E5E5E5]">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2_71)">
                    <path
                      d="M13 11.9167C15.3932 11.9167 17.3333 9.97657 17.3333 7.58333C17.3333 5.1901 15.3932 3.25 13 3.25C10.6068 3.25 8.66667 5.1901 8.66667 7.58333C8.66667 9.97657 10.6068 11.9167 13 11.9167Z"
                      stroke="#E5E5E5"
                      strokeWidth="1.625"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.5 22.75V20.5833C6.5 19.4341 6.95655 18.3319 7.7692 17.5192C8.58186 16.7065 9.68406 16.25 10.8333 16.25H15.1667C16.3159 16.25 17.4181 16.7065 18.2308 17.5192C19.0435 18.3319 19.5 19.4341 19.5 20.5833V22.75"
                      stroke="#E5E5E5"
                      strokeWidth="1.625"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_71">
                      <rect width="26" height="26" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Account
              </li>
              <li className="flex items-center gap-3 text-[#E5E5E5]">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2_75)">
                    <path
                      d="M13 22.75C18.3848 22.75 22.75 18.3848 22.75 13C22.75 7.61522 18.3848 3.25 13 3.25C7.61522 3.25 3.25 7.61522 3.25 13C3.25 18.3848 7.61522 22.75 13 22.75Z"
                      stroke="#E5E5E5"
                      strokeWidth="1.625"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13 18.4167V18.4275"
                      stroke="#E5E5E5"
                      strokeWidth="1.625"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13 14.625C12.98 14.2733 13.0749 13.9247 13.2703 13.6316C13.4657 13.3385 13.751 13.1169 14.0833 13C14.4905 12.8443 14.856 12.5962 15.151 12.2752C15.446 11.9542 15.6625 11.5692 15.7834 11.1503C15.9043 10.7315 15.9264 10.2903 15.8478 9.86144C15.7692 9.43263 15.5922 9.02791 15.3306 8.67914C15.069 8.33038 14.7301 8.04709 14.3404 7.85159C13.9507 7.65608 13.521 7.55369 13.0851 7.55249C12.6491 7.55128 12.2188 7.65128 11.8281 7.84462C11.4374 8.03796 11.0968 8.31936 10.8333 8.66667"
                      stroke="#E5E5E5"
                      strokeWidth="1.625"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_75">
                      <rect width="26" height="26" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Help
              </li>
              <li className="flex items-center gap-3 text-[#E5E5E5]">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2_80)">
                    <path
                      d="M15.1667 8.66666V6.49999C15.1667 5.92536 14.9384 5.37426 14.5321 4.96793C14.1257 4.5616 13.5746 4.33333 13 4.33333H5.41667C4.84203 4.33333 4.29093 4.5616 3.8846 4.96793C3.47827 5.37426 3.25 5.92536 3.25 6.49999V19.5C3.25 20.0746 3.47827 20.6257 3.8846 21.0321C4.29093 21.4384 4.84203 21.6667 5.41667 21.6667H13C13.5746 21.6667 14.1257 21.4384 14.5321 21.0321C14.9384 20.6257 15.1667 20.0746 15.1667 19.5V17.3333"
                      stroke="#E5E5E5"
                      strokeWidth="1.625"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.58333 13H22.75M22.75 13L19.5 9.75M22.75 13L19.5 16.25"
                      stroke="#E5E5E5"
                      strokeWidth="1.625"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_80">
                      <rect width="26" height="26" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Log out
              </li>
            </ul>
          </div>
        </div>

        <div className="h-[564px] w-[432px] rounded-xl bg-[#222533] p-10">
          <h1 className="mb-6 text-2xl font-bold text-[#e5e5e5]">
            Add Profile
          </h1>

          <div className="mb-9 flex items-center gap-6">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#1B1D28]">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2_115)">
                  <path
                    d="M20 10.6667H20.0133"
                    stroke="#7D8193"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.6667 5.33333H9.33334C7.1242 5.33333 5.33334 7.12419 5.33334 9.33333V22.6667C5.33334 24.8758 7.1242 26.6667 9.33334 26.6667H22.6667C24.8758 26.6667 26.6667 24.8758 26.6667 22.6667V9.33333C26.6667 7.12419 24.8758 5.33333 22.6667 5.33333Z"
                    stroke="#7D8193"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.33334 20L10.6667 14.6667C11.2748 14.0815 11.9645 13.7735 12.6667 13.7735C13.3688 13.7735 14.0586 14.0815 14.6667 14.6667L21.3333 21.3333"
                    stroke="#7D8193"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.6667 18.6667L20 17.3333C20.6081 16.7482 21.2978 16.4402 22 16.4402C22.7021 16.4402 23.3919 16.7482 24 17.3333L26.6667 20"
                    stroke="#7D8193"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_115">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <button className="flex items-center justify-center gap-1 rounded bg-[#1A1C29] px-9 py-4 font-roboto text-base text-[#e5e5e5] hover:bg-[#e5e5e5] hover:text-[#1A1C29]">
              <CloudArrowUp />
              Upload Image
            </button>
          </div>

          <form className="flex flex-col gap-9">
            <input
              type="text"
              placeholder="Profile name"
              className="w-full rounded border-2 border-[#34394E] bg-[#1B1D28] px-8 py-6 font-roboto text-base text-[#7D8193]"
            />

            <div className="flex w-[308px] flex-col gap-5 text-white">
              <ToggleSwitch />

              <p>
                A profile with curated content and features, and a simplified
                user interface.
              </p>
            </div>

            <button className="flex w-full justify-center rounded bg-violet-500 py-4 text-[#e5e5e5] hover:bg-violet-600">
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
